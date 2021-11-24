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
    <Route component ={Home} exact path="/" />
    <Route component ={Cases} path="/cases"  />
    <Route Component ={Coolers} path="/coolers" />
    <Route Component ={Cpus} path="/cpus" />
    <Route Component ={Fans} path="/fans" />
    <Route Component ={Gpus} path="/gpus" />
    <Route Component ={Memory} path="/memory" />
    <Route Component ={Motherboards} path="/motherboards" />
    <Route Component ={Psus} path="/psus"  />
    <Route Component ={Checkout} path="/checkout" />
</Switch>
);