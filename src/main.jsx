import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { Router } from './Routes/Router';
import { HelmetProvider } from 'react-helmet-async';
import Provider from './Provider/Provider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
        <HelmetProvider>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={Router} />
          </div>
        </HelmetProvider>
    </Provider>
  </React.StrictMode>,
)
