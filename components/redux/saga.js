import { useSelector } from "react-redux";
import { User_List,AddWeatherData,SetUserData,GET_USER_FETCH,GET_USER_SUCCESS } from "./constants";
import {takeEvery,put,call} from 'redux-saga/effects';
import store from "./storeRedux";
import { API_Key } from "../../constants";
import { AddCityData } from "./action";



function userFetch(){
    const state=store.getState();
    const cityName=state.cityReducer;
    const myVal=state.unitReducer;
    //console.log(cityName);
    const API=`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_Key}&units=${myVal}`;

    return fetch(API).then(response=>response.json());
}

function*userList(action){
        
   
            let res=yield call(userFetch);
            //console.log('checking')
            //store.dispatch(AddCityData(res.city.name)) 
            yield put({type:GET_USER_FETCH,res})
}


function* SagaData(){
    yield takeEvery(GET_USER_FETCH,userList);

}
export default SagaData;