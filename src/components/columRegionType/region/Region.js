import React from "react";

function Region(){

    return (
        // Region -> Pokedexes -> pokemon_entries 
        <div className="region">
        <h1 className="name-title">Region</h1>
        <select>
            <option>Kanto</option>
            <option>Joth</option>
        </select>
        </div>

    );
}

export default Region;