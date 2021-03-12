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


import db from "../config";
import firebase from "firebase";
import MyHeader from '../components/MyHeader'

import { RFValue } from "react-native-responsive-fontsize";
import { defined, Value } from "react-native-reanimated";

export default class AntiPollutionMethodsScreen extends Component {
  constructor() {
    super();
    this.state = {
 
   
   
    };
  }

render() {
    return (
      <View style={styles.container}>
         <MyHeader title="How to combat pollution" navigation ={this.props.navigation}/>
          <ScrollView>
       
        
<View style={{ flex: 0.5, alignItems: "center" }}><Text style={styles.buttonText}>1. Using public transports
Using public transport is a sure short way of contributing to less air pollution as it provides with less gas and energy, even carpools contribute to it. In addition to less release of fuels and gas, using a public transport can also help in saving money.</Text>

         
          </View>



<View style={{ flex: 0.5, alignItems: "center" }}>
         
<Text style={styles.buttonText}>2. Turn off the lights when not in use
The energy that the lights take also contribute to air pollution, thus less consumption of electricity can save energy. Use energy saving fluorescent lights to help the environment.</Text>
            
          </View>


 


<View style={{ flex: 0.5, alignItems: "center" }}>
 <Text style={styles.buttonText}>3. Recycle and Reuse
The concept of recycle and reuse is not just conserve resources and use them judicially but also is helpful for air pollution as it helps in reducing pollution emissions. The recycled products also take less power to make other products.</Text>        

           
          </View>



<View style={{ flex: 0.5, alignItems: "center" }}>
         
<Text style={styles.buttonText}>4. No to plastic bags
The use of plastic products could be very harmful to the environment as they take a very long time to decompose, due to their material made up of oil. The use of paper bags instead is a better alternative as they decompose easily and are recyclable.</Text>
         
          </View>

<View style={{ flex: 0.5, alignItems: "center" }}>
         <Text style={styles.buttonText}>5. Reduction of forest fires and smoking
The collecting of garbage and getting it on fire in dry seasons or dry leaves catching fires is a huge factor for causing air pollution, moreover smoking also causes air pollution and causes the air quality to worsen along with obviously damaging one’s health.</Text>

         
          </View>

<View style={{ flex: 0.5, alignItems: "center" }}>
    <Text style={styles.buttonText}>6. Use of fans instead of Air Conditioner
The usage of AC’s takes a lot of energy and emits a lot of heat which is bad for the environment. AC’s also take a lot of power and energy to work as compared to fans.</Text>     

     
          </View>

<View style={{ flex: 0.5, alignItems: "center" }}>
         
<Text style={styles.buttonText}>7. Use filters for chimneys
The gas that is emitted from fireplaces in homes and factories are extremely dangerous for air pollution and harms the air quality severely. The use of filters should be used at least if the consumption couldn’t be lessened, this will help to reduce the effect of harmful gases absorbing in the air.</Text>
       
          </View>

<View style={{ flex: 0.5, alignItems: "center" }}>
         <Text style={styles.buttonText}>8. Avoid usage of crackers
The use of crackers during festivals and weddings is sadly one of the biggest contributors to air pollution, leading to a layer of smog which is extremely harmful for health. So, practice of no crackers should be implemented.</Text>

      
          </View>



<View style={{ flex: 0.5, alignItems: "center" }}>
         
<Text style={styles.buttonText}>9. Avoid using of products with chemicals
Products that use the chemicals in their usage or smell strongly, like paints or perfumes should be used less or outside the house. There can also be an alternative to use products with low chemical content and organic properties.</Text>
            
          </View>

<View style={{ flex: 0.5, alignItems: "center" }}>
         
<Text style={styles.buttonText}>10. Implement Afforestation
Last but not the least, plant and grow as many trees as possible. The practice of planting trees provides a lot of benefits to the environment and helps with the release of oxygen.</Text>
      
       </View> 
     </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6fc0b8"
  },

  button: {
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#ffff",
    shadowColor: "#000",
    marginBottom: 10,
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16
  },
  buttonText: {
    color: "black",
    fontWeight: "200",
    fontSize:20,
    fontWeight:"bold", 
    fontFamily : 'TimesNewRoman'
  },
  formInput: {
    width: "110%",
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "grey",
    paddingBottom: 10,
    marginLeft: 20,
    marginBottom: 14
  },




});