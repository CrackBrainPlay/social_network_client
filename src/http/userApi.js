// сдесь авторизация регистрация
import { $authHost, $host } from './index';
// для поддержания сессии нужно работать с токеном и разпарсить его
import { jwtDecode } from "jwt-decode";

export const registration = async (email, password) => {
    // базовый запрос на регистрацию
    const { data } = await $host.post('api/user/registration', { email, password, role: 'ADMIN' })
    // нужно для сохранения токена
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    // базовый запрос на аторизацию
    const { data } = await $host.post('api/user/login', { email, password, })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    // базовый запрос
    const { data } = await $authHost.get('api/user/auth',)
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}