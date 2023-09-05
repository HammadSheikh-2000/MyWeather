import store from "../components/redux/storeRedux";

export default unitCheck=()=>{
    state=store.getState();
    if(state.unitReducer=='metric')
    {
        return('C');
    }
    else{
        return('F');
    }
}