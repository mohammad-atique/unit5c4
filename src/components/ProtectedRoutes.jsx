// /orders and /neworder are protected routes
import { Navigate } from "react-router";
import { useSelector } from "react-redux";
export const ProtectedRoute = ({ children }) => {
    const isLogin = useSelector((store)=>store.login)
    if(!isLogin){
        return <Navigate to="/login"  replace={false} />
    }
    return children
};