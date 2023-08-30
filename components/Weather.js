import { View,Text,StyleSheet, Pressable,ImageBackground,Dimensions, ActivityIndicator, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {clear_day, bg,clear_night, cloud_day, rain_night,cloud_night, haze_day, haze_night, rain_day, snow_day, snow_night} from "../assets/backgrounds";
const API_Key="a6eca899a628a79d89f4879f54cd23a3";
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import WeekForecast from "./weeklyForcast";
import HourlyForecast from "./HourlyForecast";
import { db } from "../config";
import { FontAwesome } from '@expo/vector-icons';
import{ref,set,remove,onValue} from 'firebase/database';
import AsyncStorage, {AsyncStorageStatic} from '@react-native-async-storage/async-storage'
import TopWeatherIcon from "./TopWeatherIcon";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import{NavigationContainer} from '@react-navigation/native'
import SearchBAr from "./SearchBar";
import App from "../App";
const myarr=[];


const Weather = (props) => {
    

    const[WeatherData,setWeatherData]=useState(null);
    const [getloading,setloading]=useState(false);
    const[getMyImage,setMyImage]=useState(snow_day);
    const [starState,SetStarState]=useState(true);
    const [getNav,setNav]=useState('false');
    const Stack=createNativeStackNavigator();
    const [getTotal,setTotal]=useState([]);
    
    
    
    async function getWeatherData(cityName,myVal){
        setloading(true);
        const API=`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_Key}&units=${myVal}`;
        let res=await fetch(API);
        
        
        if(res.status==200)
        {
            res= await res.json();
            setWeatherData(res);


            try {
            
                const starCountRef=ref(db,'City/');
                onValue(starCountRef,(snapshot)=>{
                const data=snapshot.val();
                const newPosts=Object.keys(data).map(key=>({
                    id:key,
                    ...data[key]
                }));
                setTotal(newPosts);
                
                
                var search_string = cityName;
                console.log('Searching Outside: '+search_string)
    
                var matchingLocations = newPosts.filter(function(location) {
                    console.log('Inside: '+location.title.includes(search_string))
                    return location.title.includes(search_string);
                });
                console.log('Inside: '+matchingLocations.length)
                if (matchingLocations.length > 0) {
                    console.log('working1');
                    SetStarState(true);
                } else {
                    console.log('working2');
                    SetStarState(false);
                }
                })
    
            } catch (error) {
                alert(error+"No Favourite's To Show");
                
            }
            
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
        getWeatherData(props.mycityName,props.selectedUnit);
        props.myData(WeatherData);
        props.myData2(WeatherData);
        props.background(getMyImage);
        //console.log(getMyImage);


       
        
        

    }, [props.mycityName, props.selectedUnit])

    if(getloading==true)
    {
        return(
            <ImageBackground style={{flex:1,height:Dimensions.get('screen').height}} resizeMode="cover" source={getMyImage}>
            <ActivityIndicator size={"large"}/>
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

    
        handleAddition=async()=>{
            
            set(ref(db,'City/'+WeatherData.city.name),{
                title:WeatherData.city.name
            });
            SetStarState(!starState);
            

            
        }
        const deleteItemFromList = () => {
            //console.log(item);
            const val=WeatherData.city.name;
            remove(ref(db,'City/'+val)).then(()=>{
            })
            .catch((error)=>{
                console.log('Failed to remove: '+error);
            });
            SetStarState(!starState);
          };

        handleImage=(img)=>{
            setMyImage(img);
            /*console.log('val:'+props.imageSetting);
            props.background(img);*/
            //props.background(getImage);
        }
        unitCheck=()=>{
            if(props.selectedUnit=='metric')
            {
                return('C');
            }
            else{
                return('F');
            }
            
        }
        navigateToSearch=()=>{
            
            setNav(true);
            props.myNav(getNav);
        }
        
        return ( 
            <View>
            <View style={{flexDirection:"row"}}>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20, paddingLeft: 20,}}>
                        {starState ? 
                        (<FontAwesome style={{marginRight:10}} name="star" size={30} color="gold" onPress={deleteItemFromList}/>):
                        (<FontAwesome style={{marginRight:10}} name="star-o" size={30} color="gold" onPress={handleAddition}/>)}
                </View>
                <View style={styles.menu}>
                <Pressable onPress={navigateToSearch}>
                <Text style={styles.cityStyle}><Entypo name="menu" size={40} color="white" /></Text>
                </Pressable>
            </View>
            </View>
            

                <Text style={styles.city}>{WeatherData.city.name}</Text>
                <TopWeatherIcon imageSetting={handleImage} data={WeatherData}/>
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
    menu:{
            flex: 1, 
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            paddingTop: 20,
            paddingRight: 20,
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