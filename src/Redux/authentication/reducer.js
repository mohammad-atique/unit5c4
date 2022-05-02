import {LOGIN_TOGGLE} from "./actions";
const init = {}
export const reducer = (store=init,{type,payload})=>{
    switch(type){
        case LOGIN_TOGGLE: return{
            ...store, login:payload
        }
        default: store;
    }
}