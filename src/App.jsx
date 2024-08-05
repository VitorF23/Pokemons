import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Pokemons from "./Pages/Pokemons/Pokemons";
import Types from "./Pages/Types*/Types";
import Header from "./components/Header";
import Pokemon from "./Pages/Pokemon/Pokemon";
import Type from "./Pages/Type/Type";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/types" element={<Types />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
          <Route path="/type/:type" element={<Type />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
