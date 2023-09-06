import { AddWeatherData,AddCity,AddUnit,AddDb,AddStar, SetUserData,GET_USER_FETCH,GET_USER_SUCCESS } from "./constants";

const init=[];
const initialState=[];
export const reducer=(state=initialState,action)=>{
    //state=[]
    switch(action.type){
        case AddWeatherData:return action.data
            default:
                return state
    }

}
export const cityReducer = (state = "", action) => {
    switch (action.type) {
      case AddCity:
        return action.data;
      default:
        return state;
    }
  };
export const unitReducer = (state = "", action) => {
    switch (action.type) {
      case AddUnit:
        return action.data;
      default:
        return state;
    }
  };
  export const dbReducer = (state = ([]), action) => {
    switch (action.type) {
      case AddDb:
        return action.data;
      default:
        return state;
    }
  };
  export const starReducer = (state = true, action) => {
    switch (action.type) {
      case AddStar:
        return action.data;
      default:
        return state;
    }
    
  };
  export const dataReducer = (state = { users: [] }, action) => {
    switch (action.type) {
      case GET_USER_SUCCESS:
        return { ...state, users: action.user };
      default:
        return state;
    }
  };
  
