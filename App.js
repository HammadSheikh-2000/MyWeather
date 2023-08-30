//import { StatusBar } from 'expo-status-bar';
import { StyleSheet ,Text, View, StatusBar,ImageBackground, Dimensions,ListView, ScrollView, SafeAreaView} from 'react-native';
import { useState } from "react";
import{KeyboardAwareScrollView} from 'react-native';
import SearchBAr from './components/SearchBar';
import Weather from './components/Weather';

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import{NavigationContainer} from '@react-navigation/native'
import MyMain from './MyMain';




export default function App() {
const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
        headerStyle: {
          backgroundColor: 'grey',
        },
        headerTintColor: '#fff',
        headerTitleAlign:'center',
        headerShown:false,
        
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        
      }}>
        <Stack.Screen  name='Search' component={SearchBAr}/>
        <Stack.Screen name='MyMain' component={MyMain}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    //width: Dimensions.get('screen').width,
    //height: Dimensions.get('screen').height,
  },
  myBackground:{
    //flex:1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  }
});
