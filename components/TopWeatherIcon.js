import { View,Text,StyleSheet, ImageBackground,Dimensions, ActivityIndicator, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {clear_day, bg,clear_night, cloud_day, rain_night,cloud_night, haze_day, haze_night, rain_day, snow_day, snow_night} from "../assets/backgrounds";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const TopWeatherIcon = (props) => {
    const iconobj={
        snow: <Ionicons name="snow" size={160} color='white' />,
        clear: <Ionicons name="sunny" size={160} color="#FFBF00" />,
        rainy: <Ionicons name="rainy" size={160} color="white" />,
        clouds: <Entypo name="cloud" size={160} color="white" />,
        haze: <Fontisto name="day-haze" size={160} color="orange" />,
        smoke: <FontAwesome5 name="smog" size={160} color="white" />
    }

    
    const [getIcon,setIcon]=useState('');
    const [newState,MysetState]=useState(snow_day);
    
    useEffect(()=>{
        if(props.data!=null)
        {
            
            if(props.data.list[0].weather[0].main=='Clouds')
            {
                setIcon(iconobj.clouds);
                MysetState(cloud_day);
                
                //isDayTime ? MysetState(cloud_day) : MysetState(cloud_night);
            }
            else if(props.data.list[0].weather[0].main=='Snow')
            {
                setIcon(iconobj.snow);
                MysetState(snow_day);
                
                //isDayTime ? MysetState(snow_day) : MysetState(snow_night);
            }
            else if(props.data.list[0].weather[0].main=='Clear')
            {
                setIcon(iconobj.clear);
                MysetState(clear_day);
                
                //isDayTime ? MysetState(clear_day) : MysetState(clear_night);
            }
            else if(props.data.list[0].weather[0].main=='Rain')
            {
                setIcon(iconobj.rainy);
                MysetState(rain_day);
                
                //isDayTime ? MysetState(rain_day) : MysetState(rain_day);
            }
            else if(props.data.list[0].weather[0].main.main=='Smoke')
            {
                setIcon(iconobj.smoke);
                MysetState(snow_day);
                
                //isDayTime ? MysetState(haze_day) : MysetState(haze_night);
            }
            else if(props.data.list[0].weather[0].main=='Haze')
            {
                setIcon(iconobj.haze);
                MysetState(snow_day);
                
                //isDayTime ? MysetState(haze_day) : MysetState(haze_night);
            }
            else{
                setIcon(iconobj.clear);
                MysetState(clear_day);
                
                //isDayTime ? MysetState(clear_day) : MysetState(clear_night);
            }
            //console.log(newState)
            //MysetState(clear_day);
            //console.log('myimg: '+newState);
            props.imageSetting(newState);
            //MysetState(bg);
        }
        props.imageSetting(newState);
        //console.log(newState);

    },[MysetState,newState])

    return ( 
        <View>
            <Text style={styles.degree}>{getIcon}</Text>
        </View>
     );
}
const styles=StyleSheet.create({
    degree:{
        fontSize:90,
        textAlign:"center",
        marginTop: 15,
        marginBottom: 0,
        textDecorationColor:'black',
        color: 'black',
        alignSelf:"center"
    },
})
 
export default TopWeatherIcon;