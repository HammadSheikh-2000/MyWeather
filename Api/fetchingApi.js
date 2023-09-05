
import { get } from "firebase/database";
import { useDispatch } from "react-redux";
const API_Key="a6eca899a628a79d89f4879f54cd23a3";


export default async function getWeatherData(cityName,myVal){
    const dispatch=useDispatch();
        
    //setloading(true);
    const API=`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_Key}&units=${myVal}`;
    let res=await fetch(API);
    console.log(res);
    
    if(res.status==200)
    {
        res= await res.json();
        //setWeatherData(res);
        
    }
    else if(res.status==404)
    {

            alert("City Not Found");
            //navigateToSearch();
            
    }
    else{
        
        
        //setWeatherData(null);
        
    }
    //setloading(false);

}