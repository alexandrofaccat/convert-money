import React from 'react'; 
import {StyleSheet, Text, View }from 'react-native'; 
import {createStackNavigator, createAppContainer }from "react-navigation"; 

import HomeScreen from './screen/HomeScreen'; 
import AboutScreen from './screen/AboutScreen'; 


export default class App extends React.Component {
render() {
return < AppContainer /> ; 
}
}

const AppNavigator = createStackNavigator( {
Home: {
screen:HomeScreen
  }, 
About: {
screen:AboutScreen
  }
},  {
initialRouteName:"Home"
})

const AppContainer = createAppContainer(AppNavigator); 

const styles = StyleSheet.create( {
container: {
flex:1, 
backgroundColor:'#fff', 
alignItems:'center', 
justifyContent:'center', 
}, 
}); 