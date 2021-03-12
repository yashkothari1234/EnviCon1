import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';
import { RFValue } from "react-native-responsive-fontsize";
export default class SearchHistoryScreen extends Component{
  constructor(){
    super()
    this.state = {
      userId  : firebase.auth().currentUser.email,
      searchList : []
    }
  this.requestRef= null
  }

  getSearchList =()=>{
    this.searchRef = db.collection("searchhistory")
    .onSnapshot((snapshot)=>{
      var searchList = snapshot.docs.map((doc) => doc.data())
      this.setState({
        searchList : searchList
      });
    })
  }

  componentDidMount(){
    this.getSearchList()
  }

  componentWillUnmount(){
    this.searchtRef();
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={item.aqi}
        subtitle={item.feedback}
        titleStyle={{ color: 'black', fontWeight: 'bold',fontFamily :'TimesNewRoman' }}
        subtitleStyle={{ color: 'black', fontWeight: 'bold',fontFamily :'TimesNewRoman' }}
        bottomDivider
      />
    )
  }

  render(){
    return(
      <View style={{flex:1}}>
        <MyHeader title="Search History" navigation ={this.props.navigation}/>
        <View style={{flex:1}}>
          {
            this.state.searchList.length === 0
            ?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>It's lonely here , what is it going to be ??</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.searchList}
                renderItem={this.renderItem}
              />
            )
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#6fc0b8",
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"black",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 0
     }
  }
})