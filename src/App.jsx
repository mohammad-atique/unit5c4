import {Link} from "react-router-dom"
import {Routes, Route} from "react-router-dom"
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtectedRoutes";
import {useSelector} from "react-redux";
import {store} from "./Redux/store"
function App() {
 
 
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
     
        <Link className="nav-logout" to="/logout">
          Logout
        </Link>
       
          <Link className="nav-login" to="/login">
          Login
        </Link>
       
        {/* Show either login or logout below */}
        
       
      </div>

      <Routes>
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}

        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element= {<Logout />}></Route>
        <Route path="/orders" element={<ProtectedRoute>
          <Orders/>
        </ProtectedRoute> }></Route>
        <Route path="/neworder" element={
          <ProtectedRoute>
            <NewOrder />
          </ProtectedRoute>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;