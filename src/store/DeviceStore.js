import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            // { id: 1, name: 'Тепло и звукоизоляция' },
            // { id: 2, name: 'Упаковка и транспортировка ' },
            // { id: 3, name: 'Сопутствующие товары' },
            // { id: 4, name: 'Для спорта и отдыха' }
        ]
        this._brands = [
            // { id: 1, name: 'Samsung' },
            // { id: 2, name: 'Apple' },
            // { id: 3, name: 'Xiaomi' },
            // { id: 4, name: 'Nokia' },
        ]
        this._devices = [
            // { id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://c.dns-shop.ru/thumb/st4/fit/500/500/80e5f04113d7955e3fae82319040e476/534489f34bc464e4cf68522999686645c9ac3ea0cca7faa03cef57480237d900.jpg.webp` },
            // { id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://c.dns-shop.ru/thumb/st4/fit/500/500/80e5f04113d7955e3fae82319040e476/534489f34bc464e4cf68522999686645c9ac3ea0cca7faa03cef57480237d900.jpg.webp` },
            // { id: 3, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://c.dns-shop.ru/thumb/st4/fit/500/500/80e5f04113d7955e3fae82319040e476/534489f34bc464e4cf68522999686645c9ac3ea0cca7faa03cef57480237d900.jpg.webp` },
            // { id: 4, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://c.dns-shop.ru/thumb/st4/fit/500/500/80e5f04113d7955e3fae82319040e476/534489f34bc464e4cf68522999686645c9ac3ea0cca7faa03cef57480237d900.jpg.webp` },
            // { id: 5, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://c.dns-shop.ru/thumb/st4/fit/500/500/80e5f04113d7955e3fae82319040e476/534489f34bc464e4cf68522999686645c9ac3ea0cca7faa03cef57480237d900.jpg.webp` },
            // { id: 6, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://c.dns-shop.ru/thumb/st4/fit/500/500/80e5f04113d7955e3fae82319040e476/534489f34bc464e4cf68522999686645c9ac3ea0cca7faa03cef57480237d900.jpg.webp` },
            // { id: 7, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://c.dns-shop.ru/thumb/st4/fit/500/500/80e5f04113d7955e3fae82319040e476/534489f34bc464e4cf68522999686645c9ac3ea0cca7faa03cef57480237d900.jpg.webp` },
            // { id: 8, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://c.dns-shop.ru/thumb/st4/fit/500/500/80e5f04113d7955e3fae82319040e476/534489f34bc464e4cf68522999686645c9ac3ea0cca7faa03cef57480237d900.jpg.webp` }
        ]
        this._selectedType = {} // поле в котором храниться выделенные Type
        this._selectedBrand = {} // поле в котором храниться выделенные Brand
        this._page = 1 // отвечает за текущию страницу
        this._totalCount = 0 // общее колво товаров по запросу
        this._limit = 3 // лимит товаров на странице
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }

    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }

    setLimit(limit) {
        this._limit = limit
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
    get page() {
        return this._page
    }
    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }
}

