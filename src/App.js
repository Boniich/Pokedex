import Nav from "./components/Nav";
import "./App.css"
import SearchBar from "./components/searchBar/searchBar";
import ContainsRegionAndType from "./components/columRegionType/containsRegionAndType/ContainsRegionAndType";
import Content from "./components/content/Content";
import {useState } from "react";
import {KANTO,JOHTO} from "./consts";


function App() {


  const [pokemon, setPokemon] = useState(KANTO);
  const handleRegion = (e) => {

    if(e.target.value === "Kanto"){
      console.log("kanto");
      setPokemon(KANTO);
    }else if(e.target.value === "Johto"){
      console.log("jotho");
      setPokemon(JOHTO);
    }


  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <section className="conteiner">
        <SearchBar />
        <ContainsRegionAndType handleRegion={handleRegion} />
        <Content pokemon={pokemon}/>
      </section>
    </div>
  );
}

export default App;
