import React, { useContext, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userApi';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation();
    // после того как пользователь залогинился
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    // console.log(location)
    // создаём состояния для логина и пароля
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
                // await login(email, password)
            } else {
                data = await registration(email, password)
                // await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите email...'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите пароль...'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between align-items-center mt-3 pl-3 pr-3" >
                        {isLogin ? <Col className="d-flex align-items-center">
                            <span style={{ marginRight: 2 }}>Нет аккаунта?</span>
                            <NavLink to={REGISTRATION_ROUTE} className="ml-2">Зарегестрируйся!</NavLink>
                        </Col>
                            :
                            <Col className="d-flex align-items-center">
                                <span style={{ marginRight: 2 }}>Есть аккаунт?</span>
                                <NavLink to={LOGIN_ROUTE} className="ml-2">Войдите!</NavLink>
                            </Col>}
                        <Col className="d-flex justify-content-end">
                            <Button variant="outline-success"
                                onClick={click}>
                                {isLogin ? 'Войти' : 'Регистрация'}
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;