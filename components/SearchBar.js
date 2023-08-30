import { Dimensions, TextInput, View,Alert, FlatList,ImageBackground, TouchableOpacity,Pressable,Modal,Text, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import { StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { bg } from "../assets/backgrounds";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { openDatabase } from 'react-native-sqlite-storage';
import { db } from "../config";
import{ref,set,onValue,remove} from 'firebase/database';
import { SearchBar } from "react-native-screens";
import { useRoute } from '@react-navigation/native';

import AsyncStorage, {AsyncStorageStatic} from '@react-native-async-storage/async-storage'
const myarr=[];

const SearchBAr = (props) => {
    
    
    const [getCity,setCity]=useState('Lahore');
    const [tmepType,setTempType]=useState('metric');
    const [getClose,setClose]=useState(false);
    const [getTotal,setTotal]=useState([]);
    const [getInputVisible,setInputVisible]=useState('false');
    const route = useRoute();
    //console.log(getCity);
    useEffect(()=>{
        
        try {
            
            const starCountRef=ref(db,'City/');
            onValue(starCountRef,(snapshot)=>{
            const data=snapshot.val();
            const newPosts=Object.keys(data).map(key=>({
                id:key,
                ...data[key]
            }));
            setTotal(newPosts);
            
            
        })
        } catch (error) {
            alert(error+"No Favourite's To Show");
            
        }
        
    },[])
    
    handleCity=(ThiscityName)=>{
        
        setCity(ThiscityName);
    };

    handlePress=()=>{
        const val=getCity.trim();
        if(val.length!=0)
        {
            //console.log(val);
            //props.mycityName(val);
            setInputVisible(false);
            props.navigation.navigate("MyMain",{getCity:getCity,tmepType:tmepType});
        }
        else{
            alert('Enter a valid city!');
        }
        //setCity('');
        
        
    }
    handleUnitChange=()=>{
        //console.log(tmepType);
        props.navigation.navigate("MyMain",{getCity:getCity,tmepType:tmepType});
    }
    handleAddition=()=>{
        if(getTotal!=null)
        {
            setClose(true);
        }
        else{
            alert("No Favourite's To Show");
        }
        
    }
    
    //console.log(props.mybackImag)
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
    handleItemClick = (item) => {
        setClose(false);
        //console.log(item);
        setCity(item);
        //props.mycityName(item);
        props.navigation.navigate("MyMain",{getCity:item,tmepType:tmepType});
      };
      handleInputText=()=>{
        setInputVisible(true);
      }

      const deleteItem = (item) => {
        //console.log(item);
        remove(ref(db,'City/'+item)).then(()=>{

        })
        .catch((error)=>{
            console.log('Failed to remove: '+error);
        });
        setClose(false);
      };
        
    
    return (
        
        <View style={{flex:1,marginTop:0,backgroundColor:'#dcdcdc'}}>
        <ImageBackground style={{flex:1}} resizeMode="cover" blurRadius={50} source={bg}>
        
        <View style={{marginTop:70}}>
        
        
            <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
           
            <View style={styles.topIconStyle}>

                <Ionicons style={styles.setting} name="settings" size={34} color="white" onPress={handlingDataCahnge} />
                {!getInputVisible?(
                    <View>
                    <Feather  name="search" size={30} color="white" onPress={handleInputText} />
                    </View>
                ):null}
                
                {getInputVisible?(
                    <View style={styles.searchStyle} scrollEnabled={false} >
        
                    
                    <TextInput onSubmitEditing={handlePress} returnKeyType="search" value={getCity} style={{color:'black'}}  placeholderTextColor='black' placeholder="Search Location" onChangeText={handleCity}/>
                    <Feather  name="search" size={30} color="black" onPress={handlePress} />
                    </View>
                ):null}
                
            </View> 
            </View>
        </View>

        <View>
                <ScrollView style={styles.modalStyle}>
                {
                    getTotal.map((item, index) => (
                    <View style={{borderBottomWidth:1,padding:15,flex:1,flexDirection:"row",justifyContent:"space-between"}}>
                    
                    <TouchableOpacity
                    key={index}
                    onPress={() => handleItemClick(item.title)}
                    
                    >
                    <Text style={styles.modelText}>{item.title}</Text>
                    </TouchableOpacity>
                    <View style={{alignSelf:"center",marginRight:25}}>
                    <MaterialIcons name="delete-forever" size={35} color="red" onPress={()=>deleteItem(item.title)}  />
                    </View>
                    </View>
                    
                    ))}
                    
                    
                </ScrollView>
        </View>
       
        
        </ImageBackground>
        </View>
        
     );
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
    searchStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding:7,
        borderWidth:2,
        alignItems:"center",
        width: Dimensions.get('screen').width-120,
        borderRadius:20,
        marginTop:0,
        marginBottom:0,
        borderColor:'white',
        color:'white',
        fontStyle:'italic',
        backgroundColor:'white'
    },
    topIconStyle:{
        flexDirection:"row-reverse",
        //justifyContent:"space-between",
        alignItems:"center",
        //alignContent:"center",
        flex:0.9


    },
    closeStyle:{
        flexDirection:"row-reverse",
        margin:20
    },
    CenteredStyle:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        margin:20,
    },
    modalStyle:{
        backgroundColor: 'white',
        marginTop:55,
        height:Dimensions.get('screen').height-250,
        width: Dimensions.get('screen').width-55,
        margin:20,
        borderRadius:25,
        shadowColor:'black',
        elevation:40,
        alignSelf:"center"
        

    },
    myListStyle:{
        borderRadius:25,
        shadowColor:'black',
        elevation:40,
        margin:20,
        backgroundColor: 'white',
    },
    modelText:{
        fontSize:25,
        margin:20,
        //borderWidth:2,
        
        
        
    },
    searching:{
        marginTop:50,
        textAlign:"center",
        //marginBottom:150,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        alignContent:"center",
        flexDirection:"row",
    },
    setting:{
        textAlign:"center",
        flexDirection:"row",
        alignItems:"center",
        marginLeft:15,
        alignContent:"center",
        marginTop:0
    }
 })
export default SearchBAr;