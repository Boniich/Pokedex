import React from "react";

function Pokemon(props){
    return(
        <article className="cards">
            <div className="background-img">
            {<img src={props.avatar} alt={props.name}/>}
            </div>
            <h1>{props.name}</h1>
            <div className="types">
                <div>
                <p className="type">{props.types[0]}</p>
                </div>
                <div><p className="type">{props.types[1]}</p></div>
        
            </div>
        </article>
    );
}

export default Pokemon;