import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Row, Col, Card,Typography } from 'antd';
import { bindActionCreators, Dispatch } from "redux";
import * as actions from ".././store/actions";
import store from '../store';

const { Meta } = Card;
const { Title } = Typography;
export function TempConverter() {
  const [newState, setSearch] = useState({message:'karachi',unit:'metric'})

  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);
  function aFunction(){
    var tempStore =store.getState();
    setSearch(tempStore.search)
 }
 
  store.subscribe(aFunction)
  const onUnitChange = (value: string) => {
    action.getWeather(newState.message,value)
    action.forecastDaily(newState.message,value)
    action.setSearch(newState.message,value)
  };
  return (
    <div className="site-card-wrapper" style={{ background:"white",padding:'4%' }}>
      <Title level={3}>Change Temperature Unit</Title>
      <Row gutter={16}>
        <Col span={12}>
          <Card  bordered={false} hoverable onClick={() => onUnitChange('metric')} style={{background:"#e74c3c"}}>
            <Title level={4}>Celsius</Title>
          </Card>
        </Col>
        <Col span={12}>
          <Card  bordered={false} hoverable onClick={() => onUnitChange('imperial')} style={{background:"#c0392b"}}>
            <Title level={4}>Fahrenheit</Title>
          </Card>
        </Col>

    </Row>
  </div>

  );
}
