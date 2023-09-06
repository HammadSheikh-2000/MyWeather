
import { StyleSheet ,Text, View, StatusBar,ImageBackground, Dimensions,ListView, ScrollView, SafeAreaView} from 'react-native';
import { useState } from "react";
import Weather from './Weather';
import { useRoute } from '@react-navigation/native';

const MyMain = (props) => {

    const [savedName,setSavedName]=useState('');
    const [mybackImag,setBackImage]=useState('');
    const [unit,setUnit]=useState('metric');
    const [getData,setData]=useState('');
    const [getaddedCity,setAddedCity]=useState('');
    const [getSize,setSize]=useState('');
    const [getUpdated,setUpdated]=useState('');
    
    
    const route = useRoute();

    
    
handleData=(data)=>
{
  setData(data);
}

handleCity=(mycityName)=>{
  //console.log(mycityName);
  setSavedName(mycityName);
}
backgroundHandler=(background)=>{
  //console.log(background);
  setBackImage(background);

}
handleUnit=(myUnit)=>{
  setUnit(myUnit);
}
handleAddition=(city_name)=>
{
  setAddedCity(city_name);
}
handleSize=(size)=>{
  setSize(size);
}
handleUpdate=(updated)=>{
  setUpdated(updated);

}
handleSending=(sed)=>{

};
handleUnit=(un)=>{
  console.log(un);
}
handleChangeOfScreen=()=>{
  
  props.navigation.navigate('Search',{mybackImag:mybackImag});
}
    return ( 
        <View>
        <ImageBackground resizeMode='cover' source={mybackImag} blurRadius={40} >
        <SafeAreaView style={{backgroundColor:mybackImag}}>
        <StatusBar barStyle="default"/>
        <View>
        <Weather  myNav={handleChangeOfScreen} myUpdate={getUpdated} size={handleSize} background={backgroundHandler} myData={handleData} myData2={handleData} added={handleAddition}/>
        </View>
        </SafeAreaView>
        </ImageBackground>
        </View>
     );
}
const styles = StyleSheet.create({
    myBackground:{
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height,
    }
  });
 
export default MyMain;