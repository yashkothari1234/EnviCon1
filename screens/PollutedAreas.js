import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";

import MyHeader from '../components/MyHeader'
import db from "../config";
import firebase from "firebase";

import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";

export default class PollutedAreasScreen extends Component {
  constructor() {
    super();
    this.state = {
aqi : 0,
feedback :''
    };
  }


  component = () => {
if(this.state.aqi<=50){
this.setState({feedback : "good"})
}
if(this.state.aqi>50&&this.state.aqi<=100){
  this.setState({feedback : "moderate"})
  
}
if(this.state.aqi>100&&this.state.aqi<=150){
  this.setState({feedback : "Unhealthy for sensitive age groups"})
}
if(this.state.aqi>150&&this.state.aqi<=200){
  this.setState({feedback : "Unhealthy"})
 
}
if(this.state.aqi>200&&this.state.aqi<=300){
  this.setState({feedback : " Very unhealthy"})
 
}
if(this.state.aqi>300){
  this.setState({feedback : "Hazardous"})
 
}
  if(this.state.aqi===0){
    this.setState({feedback : ""})
    alert("Please enter aqi level for feedback ")
    }
    db.collection("searchhistory").add({
    aqi : this.state.aqi,
    feedback : this.state.feedback
    });
    
  };

show(){
  if(this.state.feedback==="good"||this.state.feedback==="moderate"){
    return(
      <Text style = {styles.displayText}>Nah ! You're good for now !! </Text>
    )
  }
  if(this.state.feedback==="Unhealthy for sensitive age groups"||this.state.feedback==="Unhealthy"||this.state.feedback===" Very Unhealthy"||this.state.feedback==="Hazardous"){
    return(
      <TouchableOpacity
              style={styles.registerButton}
              onPress={() =>
                this.props.navigation.navigate('AntiPollutionMethods')
                
                
              }
            >
              <Text style={styles.displayText}>Get methods to reduce pollution </Text>
            </TouchableOpacity>
    )
  }

}
  render() {
    return(
  
 <View style = {styles.container}>
   <MyHeader title="AQI feedback" navigation ={this.props.navigation}/>
    <TextInput
    style = {styles.displayText}
              placeholder="enter aqi level"
              keyboardType="numeric"
              placeholderTextColor="gray"
              onChangeText={text => {
                this.setState({
                  aqi : text
                });
              }}
              value = {this.state.aqi}
            />
 <TouchableOpacity
              style={styles.registerButton}
              onPress={() =>
                this.component()
                
                
              }
            >
              <Text style={styles.displayText}>Get Feedback</Text>
            </TouchableOpacity>
           
 {this.show()}
<Text style = {styles.displayText}>Feedback : {this.state.feedback}</Text>
 
</View>
    )
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6fc0b8"
  },

  displayText: {
    color: "black",
    fontWeight: "200",
    fontSize: RFValue(20),
    fontWeight:"bold", 
    fontFamily : 'TimesNewRoman'
  },
  registerButton: {
    width: "75%",
    height: RFValue(50),
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(3),
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 10
  },
});