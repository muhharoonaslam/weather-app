import React, { useState ,FC } from 'react';
import { ReactComponent as HighIcon } from '../assets/high-icon.svg';
import { ReactComponent as LowIcon } from '../assets/low-icon.svg';
import { Row, Col, Card, Typography, Switch, Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

import { WeatherData } from '../store/types';
import { kelvinToCelcius } from '../utlis/unit';
import Moment from 'react-moment';

const { Title } = Typography;
interface WeatherProps {
  data: WeatherData;
  unit: string
}
const { Panel } = Collapse;

const WeatherDetails: FC<WeatherProps> = ({ data,unit }) => {

const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
};
  return (
            <Row style={{ display: 'flex',   alignItems:'center'  }}>
                <Col flex={24}>    
                    <Card title={`Today's Forecast for ${data.name}, ${data.sys.country}`} style={{textAlign:'left'}}  >
                        <Row>
                            <Col span={18}>
                                <Title level={1} style={{lineHeight:"0.4"}}>{ Math.round(data.main.temp)}<sup>&deg;</sup>{unit}   </Title>
                                <h2 style={{lineHeight:"0.4"}}>{data.name}</h2>
                                <h4 style={{textTransform:'capitalize'}}>{data.weather[0].description}</h4>

                                <h2 ><HighIcon/> {Math.round(data.main.temp_max)}<sup>&deg;</sup> {unit} <LowIcon/>  {Math.round(data.main.temp_min)}<sup>&deg;</sup> {unit}  </h2>
                            
                            </Col>
                            <Col span={6}>
                                <img src={` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} style={{width:'60%'}}/>

                            </Col>
                            <Col span={24}>
                                <Collapse
                                    bordered={false}
                                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                    className="site-collapse-custom-collapse"
                                >
                                    <Panel header="View more details for current weather" key="1" className="site-collapse-custom-panel">
                                        <Row gutter={[16, 24]}>
                                            <Col xs={12} sm={12} md={12} lg={8}>
                                                <Title level={5} style={{lineHeight:"0.4"}}>Humidity</Title>
                                                {data.main.humidity}
                                            </Col>
                                            <Col xs={12} sm={12} md={12} lg={8}>
                                                <Title level={5} style={{lineHeight:"0.4"}}>Pressure</Title>
                                                {data.main.pressure}
                                            </Col>
                                            <Col xs={12} sm={12} md={12} lg={8}>
                                                <Title level={5} style={{lineHeight:"0.4"}}>Sunrise / Sunset</Title>
                                                <Moment unix format='HH:mm a'>{data.sys.sunrise}</Moment> / <Moment unix format='HH:mm a'>{data.sys.sunset}</Moment>
                                            </Col>
                                            <Col xs={12} sm={12} md={12} lg={8}>
                                                <Title level={5} style={{lineHeight:"0.4"}}>Wind Speed / Deg</Title>
                                                {data.wind.speed} {unit === 'C' ? 'meter/sec':'miles/hour'}  / {data.wind.deg}
                                            </Col>
                                            
                                        </Row>
                                    </Panel>
                                </Collapse>
                                </Col>
                        </Row>
                    </Card>
                 
                </Col>
     
              </Row>     

  );
}

export default WeatherDetails;