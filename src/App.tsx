import React, { useEffect,useState } from 'react';
import { SearchBar } from './Components/search';
import  WeatherDetails  from './Components/WeatherDetails';
import  WeatherForecast  from './Components/WeatherForecast';
import { WeatherMap } from './Components/WeatherMap';
import  { TempConverter }  from './Components/tempConverter';

import { Layout } from 'antd';
import { Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators, Dispatch } from "redux";
import * as actions from "./store/actions";
import './App.css';

import { RootState } from './store';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const forecastData = useSelector((state: RootState) => state.forecast.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const unit = useSelector((state: RootState) => state.search.unit);
  const action = bindActionCreators(actions, dispatch);
  useEffect(() => {
    // Update the document title using the browser API
    if(weatherData ){
      // console.log('weatherData',weatherData)
    }
    if(forecastData ){
      // console.log('forecastData',forecastData)
    }
    // console.log(weatherData)
  },[weatherData,forecastData]);

  useEffect(() => {
    action.getWeather('karachi','metric')
    action.forecastDaily('karachi','metric')

  },[]);
  const [isMobile, setIsMobile] = useState(false)
    
  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }

    // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    if (window.innerWidth < 720) {
      setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  },[isMobile])

  return (
    
    <div className="App">
      <div style={{ display: 'block', width: '100%', padding:isMobile ?'0': '5% 20%'  }}>
      <h1>The Weather App</h1>
      <>
        <Layout>
          <Layout>
            <Header style={{ display: 'flex',  height:100, alignItems:'center' , padding:isMobile ?'5%': '2%'  }}>
              <SearchBar />
            </Header>
            <Content >
              <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                    {loading ? <h2 >Loading...</h2> : weatherData && <WeatherDetails data={weatherData} unit={unit === 'metric' ?'C' :'F'}/>}
                      {loading ? <h2>Loading...</h2> : weatherData &&  <WeatherForecast data={forecastData} unit={unit === 'metric' ?'C' :'F'} isMobile={isMobile}/>}
                  <TempConverter/>
                </Col>
              </Row>      
            </Content>
          </Layout>
        </Layout>
      </>
    </div>
    </div>
  );
}

export default App;
