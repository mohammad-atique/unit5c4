export const LOGIN_TOGGLE= "LOGIN_TOGGLE";

export const login = (data)=>{
    return {
        type: LOGIN_TOGGLE,
        payload:data
    }
}