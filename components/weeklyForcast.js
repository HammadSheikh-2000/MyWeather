import { View,Text,ScrollView,StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState,useEffect } from "react";
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const WeekForecast = (props) => {

    const[getSmallIcon0,setSmallIcon0]=useState('');
    const[getSmallIcon1,setSmallIcon1]=useState('');
    const[getSmallIcon2,setSmallIcon2]=useState('');
    const[getSmallIcon3,setSmallIcon3]=useState('');
    const[getSmallIcon4,setSmallIcon4]=useState('');
    const iconobi={
            snow: <Ionicons name="snow" size={50} color='white' />,
            clear: <Ionicons name="sunny" size={50} color="#FFBF00" />,
            rainy: <Entypo name="thunder-cloud" size={50} color="white" />,
            clouds: <Ionicons name="cloudy" size={50} color='white' />,
            haze: <Fontisto name="day-haze" size={50} color="orange" />,
            smoke: <FontAwesome5 name="smog" size={50} color="white" />
    }
    
    useEffect(()=>{
    
    //1
    if(props.myData.list[0].weather[0].main=='Clouds')
    {
        setSmallIcon0(iconobi.clouds);
        //console.log(iconobi.clouds);
        //setImage(cloud_day);
        //isDayTime ? setImage(cloud_day) : setImage(cloud_night);
    }
    else if(props.myData.list[0].weather[0].main=='Snow')
    {
        setSmallIcon0(iconobi.snow);
        //setImage(snow_day);
        //isDayTime ? setImage(snow_day) : setImage(snow_night);
    }
    else if(props.myData.list[0].weather[0].main=='Clear')
    {
        setSmallIcon0(iconobi.clear);
        //setImage(clear_day);
        //isDayTime ? setImage(clear_day) : setImage(clear_night);
    }
    else if(props.myData.list[0].weather[0].main=='Rain')
    {
        setSmallIcon0(iconobi.rainy);
        //setImage(rain_day);
        //isDayTime ? setImage(rain_day) : setImage(rain_day);
    }
    else if(props.myData.list[0].weather[0].main=='Smoke')
    {
        setSmallIcon0(iconobi.smoke);
        //setImage(snow_day);
        //isDayTime ? setImage(haze_day) : setImage(haze_night);
    }
    else if(props.myData.list[0].weather[0].main=='Haze')
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
    if(props.myData.list[8].weather[0].main=='Clouds')
    {
        setSmallIcon1(iconobi.clouds);
        //console.log(iconobi.clouds);
        //setImage(cloud_day);
        //isDayTime ? setImage(cloud_day) : setImage(cloud_night);
    }
    else if(props.myData.list[8].weather[0].main=='Snow')
    {
        setSmallIcon1(iconobi.snow);
        //setImage(snow_day);
        //isDayTime ? setImage(snow_day) : setImage(snow_night);
    }
    else if(props.myData.list[8].weather[0].main=='Clear')
    {
        setSmallIcon1(iconobi.clear);
        //setImage(clear_day);
        //isDayTime ? setImage(clear_day) : setImage(clear_night);
    }
    else if(props.myData.list[8].weather[0].main=='Rain')
    {
        setSmallIcon1(iconobi.rainy);
        //setImage(rain_day);
        //isDayTime ? setImage(rain_day) : setImage(rain_day);
    }
    else if(props.myData.list[8].weather[0].main=='Smoke')
    {
        setSmallIcon1(iconobi.smoke);
        //setImage(snow_day);
        //isDayTime ? setImage(haze_day) : setImage(haze_night);
    }
    else if(props.myData.list[8].weather[0].main=='Haze')
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
    if(props.myData.list[16].weather[0].main=='Clouds')
    {
        setSmallIcon2(iconobi.clouds);
        //console.log(iconobi.clouds);
        //setImage(cloud_day);
        //isDayTime ? setImage(cloud_day) : setImage(cloud_night);
    }
    else if(props.myData.list[16].weather[0].main=='Snow')
    {
        setSmallIcon2(iconobi.snow);
        //setImage(snow_day);
        //isDayTime ? setImage(snow_day) : setImage(snow_night);
    }
    else if(props.myData.list[16].weather[0].main=='Clear')
    {
        setSmallIcon2(iconobi.clear);
        //setImage(clear_day);
        //isDayTime ? setImage(clear_day) : setImage(clear_night);
    }
    else if(props.myData.list[16].weather[0].main=='Rain')
    {
        setSmallIcon2(iconobi.rainy);
        //setImage(rain_day);
        //isDayTime ? setImage(rain_day) : setImage(rain_day);
    }
    else if(props.myData.list[16].weather[0].main=='Smoke')
    {
        setSmallIcon2(iconobi.smoke);
        //setImage(snow_day);
        //isDayTime ? setImage(haze_day) : setImage(haze_night);
    }
    else if(props.myData.list[16].weather[0].main=='Haze')
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
    if(props.myData.list[24].weather[0].main=='Clouds')
    {
        setSmallIcon3(iconobi.clouds);
        //console.log(iconobi.clouds);
        //setImage(cloud_day);
        //isDayTime ? setImage(cloud_day) : setImage(cloud_night);
    }
    else if(props.myData.list[24].weather[0].main=='Snow')
    {
        setSmallIcon3(iconobi.snow);
        //setImage(snow_day);
        //isDayTime ? setImage(snow_day) : setImage(snow_night);
    }
    else if(props.myData.list[24].weather[0].main=='Clear')
    {
        setSmallIcon3(iconobi.clear);
        //setImage(clear_day);
        //isDayTime ? setImage(clear_day) : setImage(clear_night);
    }
    else if(props.myData.list[24].weather[0].main=='Rain')
    {
        setSmallIcon3(iconobi.rainy);
        //setImage(rain_day);
        //isDayTime ? setImage(rain_day) : setImage(rain_day);
    }
    else if(props.myData.list[24].weather[0].main=='Smoke')
    {
        setSmallIcon3(iconobi.smoke);
        //setImage(snow_day);
        //isDayTime ? setImage(haze_day) : setImage(haze_night);
    }
    else if(props.myData.list[24].weather[0].main=='Haze')
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
    if(props.myData.list[32].weather[0].main=='Clouds')
    {
        setSmallIcon4(iconobi.clouds);
        //console.log(iconobi.clouds);
        //setImage(cloud_day);
        //isDayTime ? setImage(cloud_day) : setImage(cloud_night);
    }
    else if(props.myData.list[32].weather[0].main=='Snow')
    {
        setSmallIcon4(iconobi.snow);
        //setImage(snow_day);
        //isDayTime ? setImage(snow_day) : setImage(snow_night);
    }
    else if(props.myData.list[32].weather[0].main=='Clear')
    {
        setSmallIcon4(iconobi.clear);
        //setImage(clear_day);
        //isDayTime ? setImage(clear_day) : setImage(clear_night);
    }
    else if(props.myData.list[32].weather[0].main=='Rain')
    {
        setSmallIcon4(iconobi.rainy);
        //setImage(rain_day);
        //isDayTime ? setImage(rain_day) : setImage(rain_day);
    }
    else if(props.myData.list[32].weather[0].main=='Smoke')
    {
        setSmallIcon4(iconobi.smoke);
        //setImage(snow_day);
        //isDayTime ? setImage(haze_day) : setImage(haze_night);
    }
    else if(props.myData.list[32].weather[0].main=='Haze')
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
    ///Working Directory

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            const d = new Date();
            let day = d.getDay();
            const day_arr=[];
            flag=false;
            for(var i=0;i<5;i++)
            {
                if(day==7)
                {
                    flag=true;
                    day=0;
                }
                if(flag==false)
                {
                    day_arr[i]=weekday[day];
                    day++;
                }
                else
                {
                    day_arr[i]=weekday[day];
                    day++;
                }
            }

    return (
        
        <View>
                <View style={styles.weeklyForcast}>
                <AntDesign name="calendar" size={23} color="white" />
                <Text style={{fontSize:16,color:'white',fontWeight:"bold"}}> Weekly Forecast</Text>
                </View>
                <ScrollView style={{alignSelf:"center"}} horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.forcastB}>
                
                <Text style={{marginTop:3}}>{getSmallIcon0}</Text>
                <Text style={styles.forcastText}>{day_arr[0]}</Text>
                <Text style={styles.forcastText}>{<AntDesign name="arrowdown" size={30} color="white" />} {props.myData.list[0].main.temp_min}°</Text>
                <Text style={styles.forcastText}>{<AntDesign name="arrowup" size={30} color="white" />} {props.myData.list[0].main.temp_max}°</Text>
                </View>

                <View style={styles.forcast}>
                
                <Text style={{marginTop:3}}>{getSmallIcon1}</Text>
                <Text style={styles.forcastText}>{day_arr[1]}</Text>
                <Text style={styles.forcastText}>{<AntDesign name="arrowdown" size={30} color="white" />} {props.myData.list[8].main.temp_min}°</Text>
                <Text style={styles.forcastText}>{<AntDesign name="arrowup" size={30} color="white" />} {props.myData.list[8].main.temp_max}°</Text>
                </View>

                <View style={styles.forcast}>
                
                <Text style={{marginTop:3}}>{getSmallIcon2}</Text>
                <Text style={styles.forcastText}>{day_arr[2]}</Text>
                <Text style={styles.forcastText}>{<AntDesign name="arrowdown" size={30} color="white" />}{props.myData.list[8+8].main.temp_min}°</Text>
                <Text style={styles.forcastText}>{<AntDesign name="arrowup" size={30} color="white" />}{props.myData.list[8+8].main.temp_max}°</Text>
                </View>

                <View style={styles.forcast}>
                
                <Text style={{marginTop:3}}>{getSmallIcon3}</Text>
                <Text style={styles.forcastText}>{day_arr[3]}</Text>
                <Text style={styles.forcastText}>{<AntDesign name="arrowdown" size={30} color="white" />}{props.myData.list[8+8+8].main.temp_min}°</Text>
                <Text style={styles.forcastText}>{<AntDesign name="arrowup" size={30} color="white" />}{props.myData.list[8+8+8].main.temp_max}°</Text>
                </View>

                <View style={styles.forcast}>
                
                <Text style={{marginTop:3}}>{getSmallIcon4}</Text>
                <Text style={styles.forcastText}>{day_arr[4]}</Text>
                <Text style={styles.forcastText}>{<AntDesign name="arrowdown" size={30} color="white" />}{props.myData.list[8+8+8+8].main.temp_min}°</Text>
                <Text style={styles.forcastText}>{<AntDesign name="arrowdown" size={30} color="white" />}{props.myData.list[8+8+8+8].main.temp_max}°</Text>
                </View>
            </ScrollView>
        </View>
        
     );
}
const styles=StyleSheet.create({
    forcastText:{
        fontSize:15,
        color:'white',
        marginTop:10,
        fontWeight:"bold"
    },
    forcast:{
        width:100,
        height:180,
        //backgroundColor:'#2F4F4F',
        borderWidth:1.5,
        borderColor:'white',
        //opacity:.7,
        borderRadius:20,
        //justifyContent:'space-between',
        //marginRight:10,
        alignItems:"center",
        alignContent:"center",
        fontSize:40,
        marginHorizontal:8,
    },
    weeklyForcast:{
        //alignSelf:"center",
        fontSize:20,
        color:'white',
        flexDirection:"row",
        marginBottom:10,
        margin:15,
        alignItems:"center"
    },
    forcastB:{
        width:100,
        height:180,
        //backgroundColor:'#2F4F4F',
        borderWidth:1.5,
        borderColor:'white',
        //opacity:.7,
        borderRadius:20,
        //justifyContent:'space-between',
        //marginRight:10,
        alignItems:"center",
        alignContent:"center",
        fontSize:40,
        marginHorizontal:8,
        marginLeft:10
    },

})
 
export default WeekForecast;