import Nav from "./components/Nav";
import "./App.css"
import SearchBar from "./components/searchBar/searchBar";
import ContainsRegionAndType from "./components/columRegionType/containsRegionAndType/ContainsRegionAndType";
import Content from "./components/content/Content";
import { useState } from "react";

const initialPokemon = "limit=150&offset=0";

function App() {

  const [pokemon, setPokemon] = useState(initialPokemon);
  const handleRegion = () => {}

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <section className="conteiner">
        <SearchBar />
        <ContainsRegionAndType />
        <Content pokemon={pokemon}/>
      </section>
    </div>
  );
}

export default App;
