import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import App from './App.jsx';
import AuthPage from './components/AuthPage.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import SettingsPage from './components/SettingsPage.jsx';
import SinglePost from './components/SinglePost.jsx';
import WritePost from './components/WritePost.jsx';
import RootLayout from './components/RootLayout.jsx';
import NotFound from './components/NotFound.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "post/:id",
        element: <SinglePost />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "write",
        element: <WritePost />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ]
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/login",
    element: <Navigate to="/auth" replace />,
  },
  {
    path: "/signup",
    element: <Navigate to="/auth" replace />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);