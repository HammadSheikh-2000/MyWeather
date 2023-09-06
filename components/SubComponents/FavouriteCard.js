import { useEffect } from "react";
import { View,Text,StyleSheet,Dimensions,ActivityIndicator,ImageBackground} from "react-native";
import { useState } from "react";
import { bg } from "../../assets/backgrounds";
const API_Key="a6eca899a628a79d89f4879f54cd23a3";
const FavouriteCard = (props) => {

    const[WeatherData,setWeatherData]=useState(null);
    const [getloading,setloading]=useState(false);


    async function getWeatherData(cityName){
        setloading(true);
        const API=`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_Key}&units=metric`;
        let res=await fetch(API);
        if(res.status==200)
        {
            res= await res.json();
            setWeatherData(res);
            
        }
        else if(res.status==404)
        {

                alert("City Not Found");
                
        }
        else{

            setWeatherData(null);
            
        }
        setloading(false);

    }

    useEffect(()=>{
        getWeatherData(props.city);

    },[props.city])

    if(getloading==true)
    {
        return(
            <ActivityIndicator size={"large"}/>
            
        );
    }
    else if(WeatherData==null)
    {
        
        return(
            <ImageBackground style={{height:Dimensions.get('screen').height}} resizeMode="cover" source={bg}>
            
            </ImageBackground>
        );
    }

    else{  
    return ( 
        <View style={styles.cardStyle}>
                    
        <View style={{flexDirection:"column"}}>
        <Text style={styles.modelText}>{props.city}</Text>
        <Text style={styles.TimeText}>3:14 PM</Text>
        <Text style={styles.WeatherText}>{WeatherData.list[0].weather[0].main}</Text>

        </View>
        <View style={{alignSelf:"center",marginRight:25}}>
        <Text style={styles.degree}>{Math.round(WeatherData.list[0].main.temp)}°</Text>
        </View>
        </View>
     );
    }
}

const styles=StyleSheet.create({
    cityStyle:{
        textAlign:"center",
        fontSize:25,
        fontWeight:"bold",
        color: 'white',
        alignSelf:"center",
        marginLeft:20,
        //marginBottom:10,

    },
    cardStyle:{
        borderWidth:1,
        flex:1,
        borderRadius:20,
        flexDirection:"row",
        justifyContent:"space-between",
        height:120,
        width: Dimensions.get('screen').width-55,
        alignSelf:"center",
        margin:10,
        textAlign:"center",
        alignContent:"center",
        borderColor:'white',
        //backgroundColor:'#42BEEE'
    },
    modelText:{
        fontSize:25,
        marginTop:10,
        marginLeft:10,
        color:'white',
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        
        //borderWidth:2,
    },
    TimeText:{
        fontSize:15,
        marginTop:2,
        marginLeft:12,
        color:'white',
    },
    WeatherText:{
        fontSize:15,
        marginTop:18,
        marginLeft:12,
        color:'white',
    },
    degree:{
        fontWeight:"bold",
        fontSize:40,
        color: 'white',
    },
})
 
export default FavouriteCard;