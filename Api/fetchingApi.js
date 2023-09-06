
import { API_Key } from "../constants";
import {takeEvery,put} from 'redux-saga/effects';
import store from "../components/redux/storeRedux";

export function* getWeatherData(){
    const state=store.getState();
    const cityName=state.cityReducer;
    const myVal=state.unitReducer;
    console.log('working');
    const API=`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_Key}&units=${myVal}`;
    let res=yield fetch(API);
    if(res.status==200)
    {
        res= yield res.json();
        put({type:AddWeatherData,res})
        //setWeatherData(res);
        store.dispatch(AddCityData(res.city.name))
    }
    else if(res.status==404)
    {
            alert("City Not Found");
            //navigateToSearch();
    }
    else{
        //setWeatherData(null);
    }
    setloading(false);
}