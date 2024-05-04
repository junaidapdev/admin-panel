import HomePage from "@/Pages/HomePage";
import LoginPage from "@/Pages/LoginPage";
import RegisterPage from "@/Pages/RegisterPage";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";
import BooksPage from "@/Pages/BooksPage";
import AuthLayout from "@/layouts/AuthLayout";

export const router = createBrowserRouter (
    [
        {
            path: 'dashboard',
            element: <DashboardLayout />,
            children: [
                {
                    path: 'home',
                    element: <HomePage />,
                },
                {
                    path: 'books',
                    element: <BooksPage />,
                },
            ],
        },
        {
            path: '/auth',
            element: <AuthLayout />,
            children: [
                {
                    path: 'login',
                    element: <LoginPage />
                },
                {
                    path: 'register',
                    element: <RegisterPage />
                }
            ]
        },
       
       
    ]
)

