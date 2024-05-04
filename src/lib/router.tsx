import HomePage from "@/Pages/HomePage";
import LoginPage from "@/Pages/Login";
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
        }
       
    ]
)

