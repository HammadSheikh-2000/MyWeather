import { useSelector } from "react-redux";
import { GET_USER_FETCH,GET_USER_SUCCESS } from "./constants";
import {takeEvery,put,call, takeLatest} from 'redux-saga/effects';
import store from "./storeRedux";
import { API_Key } from "../../constants";
import ApiCall from "../../Utility/API/ApiCall";



function userFetch(){
    const state=store.getState();
    const cityName=state.cityReducer;
    const myVal=state.unitReducer;
    const API=ApiCall();
    return fetch(API).then(response=>response.json());
}

function*userList(){
        
            const res=yield call(userFetch);
            yield put({type:GET_USER_SUCCESS,user:res})
}


function* SagaData(){
    yield takeLatest(GET_USER_FETCH,userList);

}
export default SagaData;