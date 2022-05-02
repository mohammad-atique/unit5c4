import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {login} from "../Redux/authentication/actions"
import axios from "axios"
export const Login = () => {
    const [data, setData] = useState({
        username: "",
        password: ""
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getUser = () => {
        axios.get("http://localhost:8080/users").then((d) => {
            d.data.map((i) => {
                if (i.username === data.username && i.pass === data.password) {
                    dispatch(login({ login: true }))

                    if (i.role === "admin") {
                        navigate("/orders")
                    } else if (i.role === "/client") {
                        navigate("/neworder")
                    }
                }
            })
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
        console.log(data)
    }
    const handleSubmit = () => {
        getUser();
    }
    return (
        <div>
            <input
                onChange={handleChange}
                className="username"
                type="text"
                name="username"
                placeholder="Enter Username"
            />
            <input
                onChange={handleChange}
                className="password"
                type="password"
                name="password"
                placeholder="Enter password"
            />
            {/* On this button click make network req to find user with same username and password */}
            {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
            <button className="submit" onClick={handleSubmit}>Login</button>
        </div>
    );
};