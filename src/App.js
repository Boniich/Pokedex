import Nav from "./components/Nav";
import PokeAjax from "./components/PokeAjax";
import "./App.css"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <section className="conteiner">
        <PokeAjax />
      </section>
    </div>
  );
}

export default App;
