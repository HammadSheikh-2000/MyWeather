import { db } from "../config";
import{ref,set,remove,onValue} from 'firebase/database';
import store from "../components/redux/storeRedux";
import { AddStartData } from "../components/redux/action";


export default function deleteItemFromList() {
    state=store.getState();
    store.dispatch(AddStartData(false))
    //console.log(item);
    const val=state.cityReducer;
    remove(ref(db,'City/'+val)).then(()=>{
    })
    .catch((error)=>{
        console.log('Failed to remove: '+error);
    });
};