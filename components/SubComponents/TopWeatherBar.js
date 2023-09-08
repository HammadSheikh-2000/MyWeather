import { View,Pressable,Text,StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import handleAddition from "../../Functions/databaseAddition";
import deleteItemFromList from "../../Functions/databaseDeletion";
import { Entypo } from '@expo/vector-icons';
import store from "../redux/storeRedux";
import { useEffect } from "react";


const TopWeatherBar = (props) => {
    useEffect(()=>{

    },[state.starReducer])
    
    navigateToSearch=()=>{
        props.myNav(true);
    }
    return ( 
        <View style={{flexDirection:"row",marginTop:10}}>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20, paddingLeft: 20,}}>
                        {state.starReducer ? 
                        (<FontAwesome style={{marginRight:10}} name="star" size={30} color="gold" onPress={deleteItemFromList}/>):
                        (<FontAwesome style={{marginRight:10}} name="star-o" size={30} color="gold" onPress={handleAddition}/>)}
                </View>
                <View style={styles.menu}>
                <Pressable onPress={navigateToSearch}>
                <Text><Entypo name="menu" size={40} color="white" /></Text>
                </Pressable>
            </View>
        </View>
     );
}

const styles=StyleSheet.create({
    menu:{
        flex: 1, 
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        paddingTop: 20,
        paddingRight: 20,
},


})
export default TopWeatherBar;