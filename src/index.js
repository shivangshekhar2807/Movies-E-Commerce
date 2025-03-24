import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Navigation/Home';
import About from './components/Navigation/About';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import ContactUs from './components/Navigation/ContactUs';

const router = createBrowserRouter([
  {
    path: '/', element: <App></App>,
    children: [
       { path: '/Home', element: <Home></Home> },
      { path: '/About', element: <About></About> },
       {path:'/ContactUs',element: <ContactUs></ContactUs>}
    ]
  },
  
  
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);


reportWebVitals();
