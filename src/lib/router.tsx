import HomePage from "@/Pages/HomePage";
import LoginPage from "@/Pages/LoginPage";
import RegisterPage from "@/Pages/RegisterPage";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter (
    [
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: '/login',
            element: <LoginPage />
        },
        {
            path: '/register',
            element: <RegisterPage />
        }
       
    ]
)

