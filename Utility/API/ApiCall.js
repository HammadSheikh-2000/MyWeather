import store from "../../components/redux/storeRedux";
import { API_Key } from "../../constants";

export default function ApiCall(){

    const state=store.getState();
    const cityName=state.cityReducer;
    const myVal=state.unitReducer;
    const API=`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_Key}&units=${myVal}`;
    //console.log(API)
    return API;
};
export function ApiCallWithPara(cityName,myVal){
    const API=`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_Key}&units=${myVal}`;
    return API;
}