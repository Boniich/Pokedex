import React, { useEffect, useState} from "react";
import Pokemon from "./Pokemon";

function PokeAjax(){

    const [pokemons, setPokemons] = useState([]);

    useEffect(() =>{
        let url = `https://pokeapi.co/api/v2/pokemon/`;

        fetch(url)
        .then(res => res.json())
        .then(json => {
            json.results.forEach((el) =>{
               fetch(el.url)
                .then((res) => res.json())
                .then((json) =>{
      

                    const types = () =>{
                        let types = [];
                    for(let e = 0; e < json.types.length; e++){
                        
                        types.push(json.types[e].type.name);
                    }
                        return types;
                        
                    }

                    let pokemonCollection = {
                        id: json.id,
                        name: json.name,
                        avatar:json.sprites.front_default,
                        types: types(),
                      
                   }
                //    console.log(pokemonCollection);

                   setPokemons((pokemons) => [...pokemons, pokemonCollection]);
                })

            })
        })
    },[]);


    return(
        <>
        {pokemons.map((el)=>(
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} types={el.types} />
        ))}
        </>

    )

}

export default PokeAjax;
