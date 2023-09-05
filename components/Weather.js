import { View,Text,StyleSheet,ImageBackground,Dimensions, ActivityIndicator, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import {snow_day} from "../assets/backgrounds";
const API_Key="a6eca899a628a79d89f4879f54cd23a3";
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import WeekForecast from "./weeklyForcast";
import HourlyForecast from "./HourlyForecast";
import TopWeatherIcon from "./TopWeatherIcon";
import {useSelector} from 'react-redux'
import { useDispatch } from "react-redux";
import { AddCityData} from "../components/redux/action";
import fetchFirebaseData from "../db/firebase";
import { starReducer } from "./redux/reducer";
import TopWeatherBar from "./SubComponents/TopWeatherBar";
import store from "./redux/storeRedux";
import unitCheck from "../Functions/unitCheck";


const Weather = (props) => {
    const[WeatherData,setWeatherData]=useState(null);
    const [getloading,setloading]=useState(false);
    const[getMyImage,setMyImage]=useState(snow_day);
    const dispatch=useDispatch();
    const dataCity=useSelector((state)=>state.cityReducer)
    const dataUnit=useSelector((state)=>state.unitReducer)
    const dataStar=useSelector((state)=>state.starReducer)
    
    async function getWeatherData(cityName,myVal){
        state=store.getState();
        setloading(true);
        const API=`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_Key}&units=${myVal}`;
        let res=await fetch(API);
        if(res.status==200)
        {
            res= await res.json();
            setWeatherData(res);
            dispatch(AddCityData(res.city.name));   
        }
        else if(res.status==404)
        {
                alert("City Not Found");
                navigateToSearch();
        }
        else{
            setWeatherData(null);
        }
        setloading(false);
    }
    useEffect(() => {
        getWeatherData(dataCity,dataUnit);
        fetchFirebaseData();
        
        props.myData(WeatherData);
        props.myData2(WeatherData);
        props.background(getMyImage);

    }, [dataCity, dataUnit,starReducer])

    if(getloading==true)
    {
        return(
            <ImageBackground style={{flex:1}} resizeMode="cover" source={getMyImage}>
            <ActivityIndicator style={styles.ActivityStyle} size={"large"}/>
            </ImageBackground>
            
        );
    }
    else if(WeatherData==null)
    {
        
        return(
            <ImageBackground style={{height:Dimensions.get('screen').height}} resizeMode="cover" source={getMyImage}>
            
            </ImageBackground>
        );
    }
    else
        handleImage=(img)=>{
            setMyImage(img);
        }
        return ( 
            <View>
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} automaticallyAdjustKeyboardInsets={false}>
            <TopWeatherBar myNav={props.myNav}/>
                <View>
                <Text style={styles.city}>{WeatherData.city.name}</Text>
                <TopWeatherIcon imageSetting={handleImage} data={WeatherData}/>
                </View>
                <View>
                    <Text style={styles.degree}>{Math.round(WeatherData.list[0].main.temp)}°{unitCheck()}</Text>
                </View>
                <View style={styles.icon}>
                    <Text style={{fontSize:23,color: 'white',}}>{<Entypo name="water" size={23} color="white" />} {WeatherData.list[0].main.humidity}%</Text>
                    <Text style={{fontSize:23,color: 'white',}}>{<AntDesign name="arrowdown" size={23} color="white" />}{WeatherData.list[0].main.temp_min}</Text>
                    <Text style={{fontSize:23,color: 'white',}}>{<AntDesign name="arrowup" size={23} color="white"/>}{WeatherData.list[0].main.temp_max}</Text>
                </View>
                <WeekForecast myData={WeatherData}/>
                <HourlyForecast myData2={WeatherData}/>
                <View style={styles.sunset_sunrise}>
                <View style={styles.iconBottom}>
                <Text style={styles.bottomText}>{<FontAwesome5 name="mountain" size={35} color="white" />}  {WeatherData.list[0].main.grnd_level}</Text>
                <Text style={styles.bottomText}>{<Entypo name="feather" size={35} color="white" />}  {WeatherData.list[0].main.feels_like}</Text>
                </View>
                <View style={{alignSelf:"center",marginTop:10}}>
                <Text style={{fontSize:35,color:'white'}}>{WeatherData.list[0].weather[0].main}</Text>
                </View>
                </View>
            </ScrollView>
            </View>
         );
    }
    
 
export default Weather;
const styles=StyleSheet.create({
    iconBottom:{
        flexDirection:"row",
        alignContent:"center",
        justifyContent:"space-between",
        margin:20


    },
    ActivityStyle:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        alignSelf:"center"
      },
    bottomText:{
        //marginLeft:10,
        fontSize:23,
        color:'white'

    },

    sunset_sunrise:{
        width:Dimensions.get('screen').width-20,
        height:180,
        
        alignSelf:"center",
        marginTop:20,
        margin:5,
        borderWidth:1.5,
        borderColor:'white',
        opacity:.7,
        borderRadius:20,
        

    },

    degree:{
        fontWeight:"bold",
        fontSize:75,
        textAlign:"center",
        marginTop: 0,
        marginBottom: 10,
        textDecorationColor:'white',
        color: 'white',
        alignSelf:"center"
    },
    
    city:{
        textAlign:"center",
        fontSize:35,
        color: 'white',
        alignSelf:"center",
        fontWeight:"bold",
        margin:10
        //marginBottom:10,

    },
    
    icon:{
        flexDirection:"row",
        justifyContent: "space-between",
        //width: Dimensions.get('screen').width-50,
        fontSize:30,
        //height:"50%",
        marginTop: 10,
        //marginBottom:10,
        alignItems:"center",
        //margin:12,
        marginHorizontal:14,
        color: 'black',
    },
})