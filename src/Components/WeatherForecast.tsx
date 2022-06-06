import React, { useState, FC } from 'react';
import ItemsCarousel from 'react-items-carousel';

import { Row, Col, Card, Typography    } from 'antd';
import { ForecastData } from '../store/types';
import Moment from 'react-moment';
import { kelvinToCelcius } from '../utlis/unit';

const { Title } = Typography;
const contentStyle: React.CSSProperties = {
  height: '300px',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79' ,
};
interface ForecastProps {
  data: ForecastData | null;
  unit: string;
  isMobile: boolean
}
const WeatherForecast: FC<ForecastProps> = ({ data,isMobile,unit }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  // console.log(  '🚀 ~ file: styles.js ~ line 105 ~ return ~ response',  data)
  
  return (
    <Row style={{ display: 'flex',  alignItems:'start'  }}>
                <Col span={24}> 
                <Card style={{padding:'10px'}}>
                  <Title level={3} style={{textAlign:"left"}}>Daily forecast Data</Title>
                  <ItemsCarousel
                      requestToChangeActive={setActiveItemIndex}
                      activeItemIndex={activeItemIndex}
                      numberOfCards={isMobile ? 1 :3}
                      gutter={20}
                      leftChevron={<button>{'<'}</button>}
                      rightChevron={<button>{'>'}</button>}
                      outsideChevron
                      chevronWidth={chevronWidth}
                      dot
                    >
                      {         
                      data?.list.map((item,idx) => 
                      <Card key={idx} style={{textAlign:'left',height: '100%',display:'flex', alignItems:'center',background:'#bdc3c7' }} >
                                <Row>
                                    <Col span={24}>
                                      <img src={` http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} style={{width:50}}/>
                                      <Title level={3} style={{lineHeight:"1"}}>
                                        <Moment unix format='ddd | DD MMM'>
                                            {new Date(item.dt)}
                                        </Moment> 
                                      </Title>
                                      <Title style={{lineHeight:"0.4"}} level={4}>{item.weather[0].main}</Title>
                                      <Title level={4}>{Math.round(item.temp.max)}<sup>&deg;</sup>{unit} / {Math.round(item.temp.min)}<sup>&deg;</sup>{unit}</Title>
                                    </Col>
                                </Row>
                            </Card>
                      )
                    }
                    
                    </ItemsCarousel>
                
                </Card>
                 
                </Col>
              </Row>     

  );
}
export default WeatherForecast;