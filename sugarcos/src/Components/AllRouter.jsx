
import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Log from "./Log"
import Otp from "./Otp"



export default function  AllRouter(){
    return
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Log/>} />
        <Route path="/otp" element={<Otp/>} />
    </Routes>
}