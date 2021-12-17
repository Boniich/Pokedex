import Nav from "./components/Nav";
import PokeAjax from "./components/PokeAjax";
import "./App.css"
import Hero from "./components/hero/Hero";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <section className="conteiner">
        <div className="search-bar">Search Bar</div>
        <div className="colum">
          <div className="region">
            <h1 className="name-title">Region</h1>
          </div>
          <div className="select-type">
            <h1 className="name-title">Type</h1>
          </div>
        </div>
        <div className="content">
          <div className="contador-orden">
          <div className="contador">150 Pokemon</div>
          <div className="orden">Orden</div>
          </div>

          <div className="grid-fluid"><PokeAjax /></div>
          </div>
        
      </section>
    </div>
  );
}

export default App;
