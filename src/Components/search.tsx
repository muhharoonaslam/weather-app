import React, { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators, Dispatch } from "redux";
import * as actions from ".././store/actions";

import { Input } from 'antd';

const { Search } = Input;

export function SearchBar() {
  
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);

  const onSearch = (value: string) => {
    action.setSearch(value,'metric')
    action.getWeather(value,'metric')
    action.forecastDaily(value,'metric')
    console.log('value',value) 
  };
  return (
    
    <Search
    style={{width:"100%"}}
      placeholder="Type City name to check weather"
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    // <Search placeholder="input search text" enterButton="Search" size="large" value={city} allowClear  onSearch={submitHandler} />

  );
}
