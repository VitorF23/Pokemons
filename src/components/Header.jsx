import logo3 from "../img/logo3.jpg";
import { Link, useNavigate } from "react-router-dom";
import "../components/header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <img src={logo3} alt="Logo" onClick={() => navigate("/")} />
      <div>
        <Link to="/pokemons">Pokemons</Link>
        <Link to="/types">Types</Link>
      </div>
    </header>
  );
};

export default Header;
