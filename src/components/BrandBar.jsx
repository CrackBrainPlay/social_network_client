import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Card, Row, } from 'react-bootstrap';

const Brandbar = observer(() => {
    const { device } = useContext(Context)
    return (
        <Row xs={2} md={4} lg={6}>
            {device.brands.map(brand =>
                <Card
                    style={{ cursor: 'pointer' }}
                    // active={brand.id === device.selectedBrand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    className='p-3'
                    key={brand.id}>
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default Brandbar;