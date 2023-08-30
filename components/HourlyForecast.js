import { View,Text,ScrollView,StyleSheet,Dimensions } from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const HourlyForecast = (props) => {
    const[getSmallIcon0,setSmallIcon0]=useState('');
    const[getSmallIcon1,setSmallIcon1]=useState('');
    const[getSmallIcon2,setSmallIcon2]=useState('');
    const[getSmallIcon3,setSmallIcon3]=useState('');
    const[getSmallIcon4,setSmallIcon4]=useState('');
    const iconobi={
            snow: <Ionicons name="snow" size={50} color='white' />,
            clear: <Ionicons name="sunny" size={50} color="#FFBF00" />,
            rainy: <Entypo name="thunder-cloud" size={50} color="white" />,
            clouds: <Entypo name="cloud" size={50} color="white" />,
            haze: <Fontisto name="day-haze" size={50} color="orange" />,
            smoke: <FontAwesome5 name="smog" size={50} color="white" />
    }
    
    useEffect(()=>{
    
    //1
    if(props.myData2.list[0].weather[0].main=='Clouds')
    {
        setSmallIcon0(iconobi.clouds);
        //console.log(iconobi.clouds);
        //setImage(cloud_day);
        //isDayTime ? setImage(cloud_day) : setImage(cloud_night);
    }
    else if(props.myData2.list[0].weather[0].main=='Snow')
    {
        setSmallIcon0(iconobi.snow);
        //setImage(snow_day);
        //isDayTime ? setImage(snow_day) : setImage(snow_night);
    }
    else if(props.myData2.list[0].weather[0].main=='Clear')
    {
        setSmallIcon0(iconobi.clear);
        //setImage(clear_day);
        //isDayTime ? setImage(clear_day) : setImage(clear_night);
    }
    else if(props.myData2.list[0].weather[0].main=='Rain')
    {
        setSmallIcon0(iconobi.rainy);
        //setImage(rain_day);
        //isDayTime ? setImage(rain_day) : setImage(rain_day);
    }
    else if(props.myData2.list[0].weather[0].main=='Smoke')
    {
        setSmallIcon0(iconobi.smoke);
        //setImage(snow_day);
        //isDayTime ? setImage(haze_day) : setImage(haze_night);
    }
    else if(props.myData2.list[0].weather[0].main=='Haze')
    {
        setSmallIcon0(iconobi.haze);
        //setImage(snow_day);
        //isDayTime ? setImage(haze_day) : setImage(haze_night);
    }
    else{
        setSmallIcon0(iconobi.clear);
        //isDayTime ? setImage(clear_day) : setImage(clear_night);
    }

    //2
    if(props.myData2.list[1].weather[0].main=='Clouds')
    {
        setSmallIcon1(iconobi.clouds);
        //console.log(iconobi.clouds);
        //setImage(cloud_day);
        //isDayTime ? setImage(cloud_day) : setImage(cloud_night);
    }
    else if(props.myData2.list[1].weather[0].main=='Snow')
    {
        setSmallIcon1(iconobi.snow);
        //setImage(snow_day);
        //isDayTime ? setImage(snow_day) : setImage(snow_night);
    }
    else if(props.myData2.list[1].weather[0].main=='Clear')
    {
        setSmallIcon1(iconobi.clear);
        //setImage(clear_day);
        //isDayTime ? setImage(clear_day) : setImage(clear_night);
    }
    else if(props.myData2.list[1].weather[0].main=='Rain')
    {
        setSmallIcon1(iconobi.rainy);
        //setImage(rain_day);
        //isDayTime ? setImage(rain_day) : setImage(rain_day);
    }
    else if(props.myData2.list[1].weather[0].main=='Smoke')
    {
        setSmallIcon1(iconobi.smoke);
        //setImage(snow_day);
        //isDayTime ? setImage(haze_day) : setImage(haze_night);
    }
    else if(props.myData2.list[1].weather[0].main=='Haze')
    {
        setSmallIcon1(iconobi.haze);
        //setImage(snow_day);
        //isDayTime ? setImage(haze_day) : setImage(haze_night);
    }
    else{
        setSmallIcon1(iconobi.clear);
        //isDayTime ? setImage(clear_day) : setImage(clear_night);
    }
    //3
    if(props.myData2.list[2].weather[0].main=='Clouds')
    {
        setSmallIcon2(iconobi.clouds);
        //console.log(iconobi.clouds);
        //setImage(cloud_day);
        //isDayTime ? setImage(cloud_day) : setImage(cloud_night);
    }
    else if(props.myData2.list[2].weather[0].main=='Snow')
    {
        setSmallIcon2(iconobi.snow);
        //setImage(snow_day);
        //isDayTime ? setImage(snow_day) : setImage(snow_night);
    }
    else if(props.myData2.list[2].weather[0].main=='Clear')
    {
        setSmallIcon2(iconobi.clear);
        //setImage(clear_day);
        //isDayTime ? setImage(clear_day) : setImage(clear_night);
    }
    else if(props.myData2.list[2].weather[0].main=='Rain')
    {
        setSmallIcon2(iconobi.rainy);
        //setImage(rain_day);
        //isDayTime ? setImage(rain_day) : setImage(rain_day);
    }
    else if(props.myData2.list[2].weather[0].main=='Smoke')
    {
        setSmallIcon2(iconobi.smoke);
        //setImage(snow_day);
        //isDayTime ? setImage(haze_day) : setImage(haze_night);
    }
    else if(props.myData2.list[2].weather[0].main=='Haze')
    {
        setSmallIcon2(iconobi.haze);
        //setImage(snow_day);
        //isDayTime ? setImage(haze_day) : setImage(haze_night);
    }
    else{
        setSmallIcon2(iconobi.clear);
        //isDayTime ? setImage(clear_day) : setImage(clear_night);
    }
    //4
    if(props.myData2.list[3].weather[0].main=='Clouds')
    {
        setSmallIcon3(iconobi.clouds);
        //console.log(iconobi.clouds);
        //setImage(cloud_day);
        //isDayTime ? setImage(cloud_day) : setImage(cloud_night);
    }
    else if(props.myData2.list[3].weather[0].main=='Snow')
    {
        setSmallIcon3(iconobi.snow);
        //setImage(snow_day);
        //isDayTime ? setImage(snow_day) : setImage(snow_night);
    }
    else if(props.myData2.list[3].weather[0].main=='Clear')
    {
        setSmallIcon3(iconobi.clear);
        //setImage(clear_day);
        //isDayTime ? setImage(clear_day) : setImage(clear_night);
    }
    else if(props.myData2.list[3].weather[0].main=='Rain')
    {
        setSmallIcon3(iconobi.rainy);
        //setImage(rain_day);
        //isDayTime ? setImage(rain_day) : setImage(rain_day);
    }
    else if(props.myData2.list[3].weather[0].main=='Smoke')
    {
        setSmallIcon3(iconobi.smoke);
        //setImage(snow_day);
        //isDayTime ? setImage(haze_day) : setImage(haze_night);
    }
    else if(props.myData2.list[3].weather[0].main=='Haze')
    {
        setSmallIcon3(iconobi.haze);
        //setImage(snow_day);
        //isDayTime ? setImage(haze_day) : setImage(haze_night);
    }
    else{
        setSmallIcon0(iconobi.clear);
        //isDayTime ? setImage(clear_day) : setImage(clear_night);
    }
    //5
    if(props.myData2.list[4].weather[0].main=='Clouds')
    {
        setSmallIcon4(iconobi.clouds);
        //console.log(iconobi.clouds);
        //setImage(cloud_day);
        //isDayTime ? setImage(cloud_day) : setImage(cloud_night);
    }
    else if(props.myData2.list[4].weather[0].main=='Snow')
    {
        setSmallIcon4(iconobi.snow);
        //setImage(snow_day);
        //isDayTime ? setImage(snow_day) : setImage(snow_night);
    }
    else if(props.myData2.list[4].weather[0].main=='Clear')
    {
        setSmallIcon4(iconobi.clear);
        //setImage(clear_day);
        //isDayTime ? setImage(clear_day) : setImage(clear_night);
    }
    else if(props.myData2.list[4].weather[0].main=='Rain')
    {
        setSmallIcon4(iconobi.rainy);
        //setImage(rain_day);
        //isDayTime ? setImage(rain_day) : setImage(rain_day);
    }
    else if(props.myData2.list[4].weather[0].main=='Smoke')
    {
        setSmallIcon4(iconobi.smoke);
        //setImage(snow_day);
        //isDayTime ? setImage(haze_day) : setImage(haze_night);
    }
    else if(props.myData2.list[4].weather[0].main=='Haze')
    {
        setSmallIcon4(iconobi.haze);
        //setImage(snow_day);
        //isDayTime ? setImage(haze_day) : setImage(haze_night);
    }
    else{
        setSmallIcon4(iconobi.clear);
        //isDayTime ? setImage(clear_day) : setImage(clear_night);
    }
    },[])
    
    
    return (
        
        
        <View>
        <View style={styles.weeklyForcast}>
                    <AntDesign name="clockcircleo" size={23} color="white" />
                    <Text style={{fontSize:16,color:'white',fontWeight:"bold"}}> Hourly Forecast</Text>
                </View>
        <ScrollView style={{alignSelf:"center"}} horizontal showsHorizontalScrollIndicator={false}>
                
                    <View style={styles.forcastB}>
                    <Text style={{marginTop:3}}>{getSmallIcon0}</Text>
                    <Text style={styles.forcastText}>{props.myData2.list[0].main.temp}°</Text>
                    <Text style={styles.forcastText}>{props.myData2.list[0].dt_txt.split(" ")[1]}</Text>
                    <Text style={styles.forcastText}>{<Entypo name="water" size={20} color="white" />} {props.myData2.list[0].main.humidity}%</Text>
                    <Text style={styles.forcastText}>{<Fontisto name="cloudy-gusts" size={18} color="white" />} {props.myData2.list[0].wind.speed}</Text>
                    </View>
                    
                    <View style={styles.forcastH}>
                    <Text style={{marginTop:3}}>{getSmallIcon1}</Text>
                    
                    <Text style={styles.forcastText}>{props.myData2.list[1].main.temp}°</Text>
                    <Text style={styles.forcastText}>{props.myData2.list[1].dt_txt.split(" ")[1]}</Text>
                    <Text style={styles.forcastText}>{<Entypo name="water" size={20} color="white" />} {props.myData2.list[1].main.humidity}%</Text>
                    <Text style={styles.forcastText}>{<Fontisto name="cloudy-gusts" size={18} color="white" />} {props.myData2.list[1].wind.speed}</Text>
                   
                    </View>

                    <View style={styles.forcastH}>
                    <Text style={{marginTop:3}}>{getSmallIcon2}</Text>
                    
                    <Text style={styles.forcastText}>{props.myData2.list[2].main.temp}°</Text>
                    <Text style={styles.forcastText}>{props.myData2.list[2].dt_txt.split(" ")[1]}</Text>
                    <Text style={styles.forcastText}>{<Entypo name="water" size={20} color="white" />} {props.myData2.list[2].main.humidity}%</Text>
                    <Text style={styles.forcastText}>{<Fontisto name="cloudy-gusts" size={18} color="white" />} {props.myData2.list[2].wind.speed}</Text>
                    </View>

                    <View style={styles.forcastH}>
                    <Text style={{marginTop:3}}>{getSmallIcon3}</Text>
                    
                    <Text style={styles.forcastText}>{props.myData2.list[3].main.temp}°</Text>
                    <Text style={styles.forcastText}>{props.myData2.list[3].dt_txt.split(" ")[1]}</Text>
                    <Text style={styles.forcastText}>{<Entypo name="water" size={20} color="white" />} {props.myData2.list[3].main.humidity}%</Text>
                    <Text style={styles.forcastText}>{<Fontisto name="cloudy-gusts" size={18} color="white" />} {props.myData2.list[3].wind.speed}</Text>
                    
                    </View>

                    <View style={styles.forcastH}>
                    <Text style={{marginTop:3}}>{getSmallIcon4}</Text>
                    
                    <Text style={styles.forcastText}>{props.myData2.list[4].main.temp}°</Text>
                    <Text style={styles.forcastText}>{props.myData2.list[4].dt_txt.split(" ")[1]}</Text>
                    <Text style={styles.forcastText}>{<Entypo name="water" size={20} color="white" />} {props.myData2.list[4].main.humidity}%</Text>
                    <Text style={styles.forcastText}>{<Fontisto name="cloudy-gusts" size={18} color="white" />} {props.myData2.list[4].wind.speed}</Text>
                    
                    </View>
                
                </ScrollView>
        </View>
        
                

         );
}
const styles=StyleSheet.create({
    forcastText:{
        fontSize:17,
        color:'white',
        marginTop:10,
        fontWeight:"bold"
    },
    forcast:{
        width:90,
        height:180,
        backgroundColor:'#2F4F4F',
        borderWidth:1.5,
        borderColor:'white',
        //opacity:.7,
        borderRadius:20,
        //iustifyContent:'space-between',
        //marginRight:15,
        alignItems:"center",
        alignContent:"center",
        fontSize:40,
        marginLeft:5,
        marginRight:5,
    },
    forcastH:{
        width:100,
        height:200,
        //backgroundColor:'#2F4F4F',
        borderWidth:1.5,
        borderColor:'white',
        //opacity:.7,
        borderRadius:20,
        //iustifyContent:'space-between',
        //marginRight:15,
        alignItems:"center",
        alignContent:"center",
        fontSize:40,
        marginHorizontal:8,
        //width:Dimensions.get('screen')-50
    },
    forcastB:{
        width:100,
        height:200,
        //backgroundColor:'#2F4F4F',
        borderWidth:1.5,
        borderColor:'white',
        //opacity:.7,
        borderRadius:20,
        //iustifyContent:'space-between',
        //marginRight:15,
        alignItems:"center",
        alignContent:"center",
        fontSize:40,
        marginHorizontal:8,
        marginLeft:10
        //width:Dimensions.get('screen')-50
    },
    weeklyForcast:{
        fontSize:20,
        color:'white',
        flexDirection:"row",
        marginBottom:10,
        margin:15,
        alignItems:"center",
        //alignSelf:"center"
    },
    Inside:{
        alignItems:"center",
        alignContent:"center",
        fontSize:40,
        marginTop:5,
        marginRight:2
    },

})
 
export default HourlyForecast;