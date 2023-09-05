
import { db } from "../config";
import{ref,set,remove,onValue} from 'firebase/database';
import store from "../components/redux/storeRedux";
import { AddStartData } from "../components/redux/action";

export default function handleAddition(){
    store.dispatch(AddStartData(true))
    state=store.getState();
    const val=state.cityReducer;
    set(ref(db,'City/'+val),{
        title:val
    });
    
}