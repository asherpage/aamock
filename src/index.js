import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import Signup from './components/Signup';
import Login from './components/LoginForm';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path:"/signup",
    element: <Signup />
  },{
    path:"/login",
    element: <Login />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <RouterProvider router={router} />
);