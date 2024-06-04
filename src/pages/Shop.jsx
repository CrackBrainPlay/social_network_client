import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import Brandbar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';

const Shop = () => {
    return (
        <Container>
            <Row className={'mt-2'}>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <Brandbar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;