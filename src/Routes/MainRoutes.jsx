import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home/Home';
import MainLayout from '../Layouts/MainLayout';
import FormModal from '../Components/Modal/FormModal';
import PrintPage from '../Pages/PrintPage/PrintPage';


    export const router = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout />,
          children: [
            {
              path: "/",
              element: <Home />
            },
            {
              path: "/form",
              element: <PrintPage />
            }
          ]
        },
      ]);

