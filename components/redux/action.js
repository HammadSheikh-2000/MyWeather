import { AddWeatherData,AddCity,AddUnit,AddDb,AddStar } from "./constants";

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