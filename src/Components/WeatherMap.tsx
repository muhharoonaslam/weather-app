import React, { useState } from 'react';

import { Row, Col, Card } from 'antd';

const { Meta } = Card;

export function WeatherMap() {

  return (
            <Row>
                <Col span={24}>    
                    <Card title="Default size card" extra={<a href="#">More</a>} >
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                 
                </Col>
              </Row>     

  );
}
