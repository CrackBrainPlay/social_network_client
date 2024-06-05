import axios from 'axios';

//инстанст для запросов без авторизации
const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

//инстанст для авторизованных запросов без авторизации
const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

// в случае authHost необходимо подставлять токен
const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config

}

// вешаем интерцептер на запрос 
$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}