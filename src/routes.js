import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cases from "./Components/Cases/Cases";
import Coolers from "./Components/Coolers/Coolers";
import Cpus from "./Components/Cpus/Cpus";
import Fans from "./Components/Fans/Fans";
import Gpus from "./Components/Gpus/Gpus";
import Memory from "./Components/Memory/Memory";
import Motherboards from "./Components/Motherboards/Motherboards";
import Psus from "./Components/Psus/Psus";
import Checkout from "./Components/Checkout/Checkout";

export default (
<Switch>
    <Route exact path="/" Component ={Home}/>
    <Route path="/cases"  Component ={Cases}/>
    <Route path="/coolers" Component ={Coolers}/>
    <Route path="/Cpus" Component ={Cpus}/>
    <Route path="/Fans" Component ={Fans}/>
    <Route path="/gpus" Component ={Gpus}/>
    <Route path="/memory" Component ={Memory}/>
    <Route path="/motherboards" Component ={Motherboards}/>
    <Route path="/psus"  Component ={Psus}/>
    <Route path="/checkout" Component ={Checkout}/>
</Switch>
);