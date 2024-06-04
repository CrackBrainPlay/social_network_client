import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    console.log(location)
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
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите пароль...'
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
                            <Button variant="outline-success">
                                {isLogin ? 'Войти' : 'Регистрация'}
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;