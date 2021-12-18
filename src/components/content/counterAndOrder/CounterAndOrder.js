import React from "react";
import Counter from "../counter/Counter";
import Order from "../order/Order";

function CounterAndOrder(){

    return(
        <div className="counter-order">
          <Counter />
          <Order />
        </div>
    );
}

export default CounterAndOrder;