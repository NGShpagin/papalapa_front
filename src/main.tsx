import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Provider} from 'react-redux';
import './index.css'
import React from 'react';
import {Layout} from "./layout/Layout/Layout";
import {store} from "./store/store";
import {MainPage} from "./pages/MainPage/MainPage";
import {About} from "./pages/About/About";
import {Catalog} from "./pages/Catalog/Catalog";
import {Certificates} from "./pages/Cerificates/Certificates";
import {Contacts} from "./pages/Contacts/Contacts";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Item} from "./pages/Item/Item";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <MainPage/>
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
