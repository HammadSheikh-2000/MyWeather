import { AddWeatherData,AddCity,AddUnit,AddDb,AddStar,SetUserData, User_List,GET_USER_FETCH,GET_USER_SUCCESS } from "./constants";

export const AddWeather=(data)=>{
    return{
        type:AddWeatherData,
        data:data,
    }
}
export const AddCityData=(data)=>{
    return{
        type:AddCity,
        data:data
    }
}
export const AddUnitData=(data)=>{
    return{
        type:AddUnit,
        data:data
    }
}
export const AddDbData=(data)=>{
    return{
        type:AddDb,
        data:data
    }
}
export const AddStartData=(data)=>{
    return{
        type:AddStar,
        data:data
    }
}
export const getUsersFetch=(data)=>{
    return{
    type:GET_USER_FETCH,
    data:data
}}
export const setUser=(user)=>({
    type:GET_USER_SUCCESS,
    user:user
});