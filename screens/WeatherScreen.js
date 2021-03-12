import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import MyHeader from '../components/MyHeader'


export default class WeatherScreen extends React.Component{
    constructor(){
  super();
  this.state={
weather :'',
};
}


  getWeather = async () => {
    //change latitude and longitude
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=20&lon=77';
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          weather: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentDidMount = () => {
    this.getWeather();
  };


  render(){
            if (this.state.weather === '') {
      return (
        <View style={styles.container}>
              <MyHeader title="Weather" navigation={this.props.navigation}/>
          <Text style = {styles.displayText}>Loading...</Text>
        </View>
      );
    }
    else{
    return(
  
      <View style = {styles.container}>
            <MyHeader title="Weather" navigation={this.props.navigation}/>
            <Text style = {styles.displayText}>
Weather : {this.state.weather.weather[0].description}  </Text>
 <Text style = {styles.displayText}>Wind Speed : {this.state.weather.wind.speed} nautical miles </Text>
 <Text style = {styles.displayText}>Temperature : {this.state.weather.main.temp} degrees celcius </Text>
 <Text style = {styles.displayText}>Min Temperature :{this.state.weather.main.temp_min} degrees celcius </Text>
 <Text style = {styles.displayText}>Max Temperature :{this.state.weather.main.temp_max} degrees celcius</Text>
 <Text style = {styles.displayText}>Pressure :{this.state.weather.main.pressure} mb </Text>
 <Text style = {styles.displayText}>Humidity :{this.state.weather.main.humidity} </Text>
       
      </View>
    )
    }
  }
}





const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#6fc0b8"
  },
  displayText:{
    color: 'black',
    textAlign: 'center',
    fontSize: RFValue(20),
    fontWeight : 'bold',
     fontFamily : 'TimesNewRoman',
  },
 
})