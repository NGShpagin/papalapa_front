import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Provider} from 'react-redux';
import './index.css'
import React from 'react';
import {Layout} from "./layout/Layout/Layout.tsx";
import {store} from "./store/store.tsx";
import {Main} from "./pages/Main/Main.tsx";
import {About} from "./pages/About/About.tsx";
import {Catalog} from "./pages/Catalog/Catalog.tsx";
import {Certificates} from "./pages/Cerificates/Certificates.tsx";
import {Contacts} from "./pages/Contacts/Contacts.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Item} from "./pages/Item/Item.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Main/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/catalog',
                element: <Catalog/>
            },
            {
                path: '/certificates',
                element: <Certificates/>
            },
            {
                path: '/contacts',
                element: <Contacts/>
            },
            {
                path: '/items/:id',
                element: <Item/>
            },
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);
