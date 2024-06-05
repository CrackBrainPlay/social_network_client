// сдесь авторизация регистрация
import { $authHost, $host } from './index';


export const createType = async (type) => {
    // базовый запрос создание типа
    const { data } = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    // базовый запрос на получение типов
    const { data } = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    // базовый запрос создание типа
    const { data } = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    // базовый запрос на получение типов
    const { data } = await $host.get('api/brand')
    return data
}

export const createDevice = async (device) => {
    // базовый запрос создание девайса
    const { data } = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async () => {
    // базовый запрос на получение девайсов
    const { data } = await $host.get('api/device')
    return data
}

export const fetchOneDevice = async (id) => {
    // базовый запрос на конкретный девайс
    const { data } = await $host.get('api/device/' + id)
    return data
}
