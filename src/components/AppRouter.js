import React, { useContext } from 'react';
// модули необходимые для навигации
import { Route, Routes, Navigate } from 'react-router-dom';
import { authRouters, publicRouters } from '../routers';
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from '../index';

const AppRouter = () => {
    // делаем просто заглушку для подтверждения верефикации
    // const isAuth = false;
    const { user } = useContext(Context)

    // console.log(user)
    // debugger;
    // console.log(authRouters);
    // console.log(publicRouters);
    return (
        <Routes>
            {user.isAuth && authRouters.map(({ path, element }) => // импортируем суда свой массив и делаем по нему деструктуризацию
                // exact - указывает на то что путь должен точно совпадать
                // и так как мы пробегаемся по массиву обязательно key
                <Route key={path} path={path} element={element} exact />
            )}
            {publicRouters.map(({ path, element }) =>
                <Route key={path} path={path} element={element} exact />
            )}
            <Route path='*' element={<Navigate to={SHOP_ROUTE} />} />
        </Routes>

    );
};

export default AppRouter;