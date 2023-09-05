import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddWeather } from "../components/redux/action";
import {useSelector} from 'react-redux'
import { View } from "react-native";

const API_Key="a6eca899a628a79d89f4879f54cd23a3";
//const[WeatherData,setWeatherData]=useState(null);
//const [getloading,setloading]=useState(false);

    const ApiCalling = () => {
    const dispatch=useDispatch();
    const dataCity=useSelector((state)=>state.cityReducer)
    const dataUnit=useSelector((state)=>state.unitReducer)
    

    async function getWeatherData(cityName,myVal){
        
    //setloading(true);
    const API=`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_Key}&units=${myVal}`;
    let res=await fetch(API);
    
    
    if(res.status==200)
    {
        res= await res.json();
        dispatch(AddWeather(res));
        console.log('yes:'+dataCity)
        console.log(dataUnit)
        
        //console.log(data);
        //setWeatherData(res);
        
    }
    else if(res.status==404)
    {

            alert("City Not Found");
            navigateToSearch();
            
    }
    else{
        
        
        //setWeatherData(null);
        
    }
    
    //setloading(false);

}
getWeatherData('islamabad','metric')
        
        
        return ( <View>

        </View> );
     }
      
     export default ApiCalling;

    