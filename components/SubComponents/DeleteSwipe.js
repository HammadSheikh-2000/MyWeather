
import { GestureHandlerRootView,Swipeable} from "react-native-gesture-handler";
import { TouchableOpacity,ScrollView,View,style,StyleSheet } from "react-native";
import FavouriteCard from "./FavouriteCard";
import {useSelector} from 'react-redux';
import { useDispatch } from "react-redux";
import { MaterialIcons } from '@expo/vector-icons';
import{ref,remove} from 'firebase/database';
import { db } from "../../config";
import { AddCityData,AddUnitData } from "../redux/action";
import store from "../redux/storeRedux";

const DeleteSwipe = (props) => {
    const dataDB=useSelector((state)=>state.dbReducer);
    const dispatch=useDispatch();
    state=store.getState();

    const checking=(item)=>{

        return(
            <View style={styles.deleteStyle}>
            <MaterialIcons name="delete-forever" size={45} color="white" onPress={()=>deleteItem(item)} />
            </View>
            )
    }
    const deleteItem = (item) => {
        remove(ref(db,'City/'+item)).then(()=>{

        })
        .catch((error)=>{
            console.log('Failed to remove: '+error);
        });
      };
    handleItemClick = (item) => {
        dispatch(AddCityData(item)),
        dispatch(AddUnitData(state.unitReducer)),
        props.navigating.navigate("MyMain");
        
      };


    return ( 
        
            <ScrollView showsVerticalScrollIndicator={false}>
            {
                    dataDB.map((item, index) => (
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
     );
}
const styles=StyleSheet.create({
    deleteStyle:{
        alignSelf:"center",
        backgroundColor:'red',
        height:105,
        width:100,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:15
    },

})
 
export default DeleteSwipe;