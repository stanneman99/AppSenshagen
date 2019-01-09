import React from 'react';
import { StyleSheet, Text, View, Input, Button } from 'react-native';
import Style from '../Style'; 

export default class Weatherscreen extends React.Component {
  constructor(props)
  {
    super(props); 

    this.state=
    {
      deg: 0,
      weatherDataTemp: 0, 
      rain:'',
      appState: {temp:''},
      unit:'metric',
      city:'Zwolle',
    }
    this.GetSettings();

  }

  GetWeather = async() => {
    console.log('test' + this.state.unit); 
    let uri = "http://api.openweathermap.org/data/2.5/weather?q=" + this.state.city + "&appid=dc1aba80d15fc9d2fe044b3e6799e2cf&units=" + this.state.unit;
    let res = await fetch (uri); 
    let json = await res.json ();
    console.log('kaal' + json.weather.main); 
    this.setState({
      deg : json.wind.speed, 
      weatherDataTemp : json.main.temp, 
      rain : json.weather.main,
    });
    console.log(this.state.rain);
  }


GetSettings = async() => {
  try{
      this.GetWeather(); 
  } catch (error){
    console.log(error);
  }
}

render(){
  return(
    <View style={{flex:1}} backgroundColor="#2F4F4F">
    <View style={{flex:5}}>
      <Text style={Style.Title} >De stad: {this.state.city} </Text>
      <Text style={Style.Title} >De temperatuur: {this.state.weatherDataTemp} C° </Text> 
      <Text style={Style.Title} >De regen: {this.state.rain}</Text> 
      <Text style={Style.Title} >De wind: {this.state.deg} Bft</Text> 

    </View> 
    </View>      
  )}; 
}