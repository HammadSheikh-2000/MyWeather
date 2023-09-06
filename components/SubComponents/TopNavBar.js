import { View,SafeAreaView,TextInput,StyleSheet,Dimensions,Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddCityData,AddUnitData } from "../redux/action";
import { Feather } from '@expo/vector-icons';
import { getUsersFetch } from "../redux/action";
import {useSelector} from 'react-redux'

const TopNavBar = (props) => {
    
    //const dataWeather=useSelector((state)=>state.dataReducer.users);
    const dispatch=useDispatch();
    const [getCity,setCity]=useState('Lahore');
    const [tmepType,setTempType]=useState('metric');
    const [tempText,setTempText]=useState('');
    


    handlingDataCahnge=()=>{
        Alert.alert(
            'Please Choose and Option',
            'C° or F°',
            [
                {
                    text: 'C°',
                    onPress:()=>{
                        setTempType('metric');
                        
                        
                        handleUnitChange();
                    }
                    
                },
                {
                    text: 'F°',
                    onPress:()=>{
                        setTempType('imperial');
                        handleUnitChange();
                        
                    }
                }
            ],
            
            
        )
    }
    handleUnitChange=()=>{
        dispatch(AddUnitData(tmepType));
        props.navigating.navigate("MyMain");
    }
    handlingBack=()=>{
        props.navigating.navigate("MyMain");
    }
    handleCity=(ThiscityName)=>{
        
        
        setCity(ThiscityName);
        setTempText(ThiscityName);
    };
    handlePress=()=>{
        if(tempText!='')
        {
            const val=getCity.trim();
            dispatch(AddCityData(val));
            dispatch(AddUnitData(tmepType));
            if(val.length!=0)
            {
                setTempText('');
                props.navigating.navigate("MyMain");
            }
            
        }
        
        else{
            setTempText('');
            alert('Enter a valid city!');
            
        }
    }

    
    return ( 
        <View style={{marginTop:35,marginBottom:35}}>
        <SafeAreaView>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <View style={{marginLeft:15}}>
                <Ionicons name="chevron-back" size={45} color="white" onPress={handlingBack} />
            </View>
            
            <View style={styles.topIconStyle}>
                <Ionicons style={styles.setting} name="settings" size={34} color="white" onPress={handlingDataCahnge} />
                <View style={styles.searchStyle} scrollEnabled={false} >
                    <View style={styles.inputStyle}>
                    <TextInput onSubmitEditing={handlePress} returnKeyType="search" value={tempText} style={{color:'black'}}  placeholderTextColor='black' placeholder="Search Location" onChangeText={handleCity}/>
                    </View>
                    <Feather  name="search" size={30} color="black" onPress={handlePress} />
                    </View>
            </View> 
            </View>
            </SafeAreaView>
        </View>
        );
}

const styles=StyleSheet.create(({
    topIconStyle:{
        flexDirection:"row-reverse",
        alignItems:"center",
        marginLeft:20


    },
    setting:{
        textAlign:"center",
        flexDirection:"row",
        alignItems:"center",
        marginLeft:15,
        alignContent:"center",
        marginTop:0
    },
    searchStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding:7,
        borderWidth:2,
        alignItems:"center",
        width: Dimensions.get('screen').width-150,
        borderRadius:20,
        marginTop:0,
        marginBottom:0,
        borderColor:'white',
        color:'white',
        fontStyle:'italic',
        backgroundColor:'white'
    },
    inputStyle:{
        width: Dimensions.get('screen').width-200,
    },
}))
 
export default TopNavBar;