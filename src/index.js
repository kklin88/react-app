import React from 'react';

import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom'
import { globalRouters } from '@/router'

import '@/common/styles/frame.styl'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    // <App />
    <RouterProvider router={globalRouters} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

