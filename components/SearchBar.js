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
import FavouriteCard from "./FavouriteCard";
import { GestureHandlerRootView,Swipeable } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
const myarr=[];

const SearchBAr = (props) => {
    
    
    const [getCity,setCity]=useState('Lahore');
    const [tmepType,setTempType]=useState('metric');
    const [getClose,setClose]=useState(false);
    const [getTotal,setTotal]=useState([]);
    const [getInputVisible,setInputVisible]=useState(true);
    const route = useRoute();
    const navigation = useNavigation();
    const [tempText,setTempText]=useState('');
    const [GetcardState,setCardState]=useState(false);
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
        setTempText(ThiscityName);
    };
  
    handlePress=()=>{
        if(tempText!='')
        {
            const val=getCity.trim();
            if(val.length!=0)
            {
                //console.log(val);
                //props.mycityName(val);
                //setInputVisible(false);
                setTempText('');
                props.navigation.navigate("MyMain",{getCity:getCity,tmepType:tmepType});
                
            }
        }
        
        else{
            setTempText('');
            alert('Enter a valid city!');
            
        }
        
        
        
    }
    handlingBack=()=>{
        props.navigation.navigate("MyMain",{getCity:getCity,tmepType:tmepType});

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
        //setInputVisible(true);
      }

      const deleteItem = (item) => {
        //console.log(item);
        setCardState(true);
        remove(ref(db,'City/'+item)).then(()=>{

        })
        .catch((error)=>{
            console.log('Failed to remove: '+error);
        });
        setClose(false);
        //setCardState(false);
        
        
      };
    
        const checking=(item)=>{

            return(
                <View style={styles.deleteStyle}>
                <MaterialIcons name="delete-forever" size={45} color="white" onPress={()=>deleteItem(item)} />
                </View>
                )
      }
        
    
    return (
        
        <View style={{flex:1,marginTop:0,backgroundColor:'#dcdcdc'}}>
        <ImageBackground style={{flex:1}} resizeMode="cover" blurRadius={50} source={bg}>
            
        <View style={{marginTop:15}}>
        
        <SafeAreaView>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <View style={{marginLeft:15}}>
                <Ionicons name="chevron-back" size={45} color="white" onPress={handlingBack} />
            </View>
            
            <View style={styles.topIconStyle}>
                <Ionicons style={styles.setting} name="settings" size={34} color="white" onPress={handlingDataCahnge} />
                {!getInputVisible?(
                    <View>
                    <Feather  name="search" size={30} color="white" onPress={handleInputText} />
                    </View>
                ):null}
                
                {getInputVisible?(
                    <View style={styles.searchStyle} scrollEnabled={false} >
                    
        
                    <View style={styles.inputStyle}>
                    <TextInput onSubmitEditing={handlePress} returnKeyType="search" value={tempText} style={{color:'black'}}  placeholderTextColor='black' placeholder="Search Location" onChangeText={handleCity}/>
                    </View>
                    <Feather  name="search" size={30} color="black" onPress={handlePress} />
                    </View>
                ):null}
                
            </View> 
            </View>
            </SafeAreaView>
        </View>

        <View style={{flex:1}}>
        
                <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:0}}>
                {
                    getTotal.map((item, index) => (
                    <GestureHandlerRootView>

                    <Swipeable  renderRightActions={()=>checking(item.title)}>
                    
                    <TouchableOpacity
                    
                    key={index}
                    onPress={() => handleItemClick(item.title)}>
                    
                    <FavouriteCard city={item.title}/>
                    </TouchableOpacity>
                    </Swipeable>
                    </GestureHandlerRootView>
                    
                    ))}
                    
                    
                </ScrollView>
        </View>
       
        
        </ImageBackground>
        </View>
        
     );
}

 const styles=StyleSheet.create({
    
    
  
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
   
    topIconStyle:{
        flexDirection:"row-reverse",
        //justifyContent:"space-between",
        alignItems:"center",
        //alignContent:"center",
        marginLeft:20


    },
    deleteStyle:{
        alignSelf:"center",
        backgroundColor:'red',
        height:105,
        width:100,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:15
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