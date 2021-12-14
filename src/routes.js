import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Build";
import Cases from "./Components/Cases/Cases";
import Coolers from "./Components/Coolers/Coolers";
import Cpus from "./Components/Cpus/Cpus";
import Fans from "./Components/Fans/Fans";
import Gpus from "./Components/Gpus/Gpus";
import Memory from "./Components/Memory/Memory";
import Motherboards from "./Components/Motherboards/Motherboards";
import Psus from "./Components/Psus/Psus";
import Checkout from "./Components/Checkout/pages/Checkout";
import payment from './Components/Checkout/pages/index';

export default (
<Switch>
    <Route component ={Home} exact path="/" />
    <Route component ={Cases} path="/cases"  />
    <Route component ={Motherboards} path="/motherboards" />
    <Route component ={Cpus} path="/cpus" />
    <Route component ={Gpus} path="/gpus" />
    <Route component ={Coolers} path="/coolers" />
    <Route component ={Fans} path="/fans" />
    <Route component ={Memory} path="/memory" />
    <Route component ={Psus} path="/psus"  />
    <Route component ={Checkout} path="/checkout" />
    <Route component = {payment} path="/payment" />
</Switch>
);