import React, {Component} from "react";
import Pokemon from "./Pokemon";

export default class PokeAjax extends Component{

    state ={
        pokemons: [],
    };

    // componentDitMount allow render after component already been in DOM Three.

     componentDidMount(){

        // parameter limit is the max of elements that api will show 
        // parameter offset means set since which place the api will return result

        let url = "https://pokeapi.co/api/v2/pokemon/?limit=150&offset=0";

        fetch(url)
        .then(res => res.json())
        .then(json => {
            // this forEach will read all objects in prop result
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

                    let pokemon = {
                        id: json.id,
                        name: json.name,
                        avatar:json.sprites.front_default,
                        types: types(),
                      
                   }
            
                   let pokemons = [...this.state.pokemons, pokemon];

                   this.setState({pokemons});

                })

            });
        })
    }

     render(){
        return(
            <>
            {this.state.pokemons.map((el) =>(
                <Pokemon key={el.id} name={el.name} avatar={el.avatar} types={el.types}   />
            ))}
            
            </>
        )
    }


}