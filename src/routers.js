// сдесь мы описываем все наши маршруты

// import { element } from "react"
import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    DEVICE_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "./utils/consts";
import Basket from "./pages/Basket";
import Auth from "./pages/Auth";
import Shop from "./pages/Shop";
import DevicePage from "./pages/DevicePage";

// первый список, это те страницы до которых имеет доступ авторизованный пользователь
export const authRouters = [
    {
        path: ADMIN_ROUTE,
        element: <Admin />
    },
    {
        path: BASKET_ROUTE,
        element: <Basket />
    }
]

// второй список, это те страницы до которых имеет доступ любой пользователь
export const publicRouters = [
    {
        path: SHOP_ROUTE,
        element: <Shop />
    },
    {
        path: LOGIN_ROUTE,
        element: <Auth />
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth />
    },
    {
        path: DEVICE_ROUTE + '/:id', // для просмотра конкретного устройство нужно к ней добавлять :id
        element: <DevicePage />
    }
]