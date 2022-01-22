import React from "react";
import PokeAjax from "../PokeAjax";
import CounterAndOrder from "./counterAndOrder/CounterAndOrder";

function Content({pokemon}){

    return(

        <div className="content">
        <CounterAndOrder />
        <div className="grid-fluid">
        <PokeAjax pokemon={pokemon}/>
        </div>
        </div>

    );
}

export default Content;