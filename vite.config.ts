import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import path, {resolve} from 'node:path'
import {libInjectCss} from 'vite-plugin-lib-inject-css'
import {fileURLToPath} from 'node:url'
import dts from 'vite-plugin-dts'
import {globSync} from 'glob'

// https://vitejs.dev/config/
export default defineConfig({
    base: path.resolve(__dirname, '/'),
    plugins: [
        react(),
        libInjectCss(),
        dts({
            tsconfigPath: 'tsconfig.app.json',
        }),],
    server: {
        watch: {
            usePolling: true,
        },
        host: true, // needed for the Docker Container port mapping to work
        strictPort: true, // not necessary
        port: 80 // you can replace this port with any port
    },
    build: {
        manifest: true,
        lib: {
            entry: resolve(__dirname, 'src/main.tsx'),
            formats: ['es'],
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            input: Object.fromEntries(
                globSync(['src/components/**/*.tsx', 'src/main.tsx']).map((file) => {
                    // This remove `src/` as well as the file extension from each
                    // file, so e.g. src/nested/foo.js becomes nested/foo
                    const entryName = path.relative(
                        'src',
                        file.slice(0, file.length - path.extname(file).length)
                    )
                    // This expands the relative paths to absolute paths, so e.g.
                    // src/nested/foo becomes /project/src/nested/foo.js
                    const entryUrl = fileURLToPath(new URL(file, import.meta.url))
                    return [entryName, entryUrl]
                })
            ),
            output: {
                entryFileNames: '[name].js',
                assetFileNames: 'assets/[name][extname]',
                globals: {
                    react: 'React',
                    'react-dom': 'React-dom',
                    'react/jsx-runtime': 'react/jsx-runtime',
                },
            },
        },
    }
})
