import {View,ImageBackground} from "react-native";
import {useEffect} from "react";
import React from "react";
import { bg } from "../assets/backgrounds";
import fetchFirebaseData from "../db/firebase";
import TopNavBar from "./SubComponents/TopNavBar";
import DeleteSwipe from "./SubComponents/DeleteSwipe";

const SearchBAr = (props) => {
    useEffect(()=>{
        fetchFirebaseData();
    },[])
    return (
        
        <View style={{flex:1,marginTop:0,backgroundColor:'#dcdcdc'}}>
        <ImageBackground style={{flex:1}} resizeMode="cover" blurRadius={50} source={bg}>
        <TopNavBar navigating={props.navigation}/>
        <View style={{flex:1}}>
        <DeleteSwipe navigating={props.navigation}/>
        </View>
        </ImageBackground>
        </View>
     );
}
export default SearchBAr;