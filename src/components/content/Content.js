import React from "react";
import PokeAjax from "../PokeAjax";
import CounterAndOrder from "./counterAndOrder/CounterAndOrder";

function Content(){

    return(

        <div className="content">
        <CounterAndOrder />
        <div className="grid-fluid">
        <PokeAjax />
        </div>
        </div>

    );
}

export default Content;