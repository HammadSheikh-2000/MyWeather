import{ref,set,remove,onValue} from 'firebase/database';
import { db } from "../config";
import store from '../components/redux/storeRedux';
import {AddDbData,AddStartData } from "../components/redux/action";


export default function fetchFirebaseData()
{
    const state = store.getState();
    try {
        const starCountRef=ref(db,'City/');
        onValue(starCountRef,(snapshot)=>{
        const data=snapshot.val();
        const newPosts=Object.keys(data).map(key=>({
            id:key,
            ...data[key]
        }));
        
        
        store.dispatch(AddDbData(newPosts))
        
        var search_string = state.cityReducer;
        var matchingLocations = newPosts.filter(function(location) {
            
            return location.title.includes(search_string);
        });
        
        if (matchingLocations.length > 0) {
            //SetStarState(true);
            store.dispatch(AddStartData(true));
            
        } else {
            store.dispatch(AddStartData(false));
        }
        })
    } catch (error) {
        alert(error+"No Favourite's To Show");
        
    }
}