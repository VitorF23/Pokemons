import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../Pokemons/pokemons.css";

const Pokemons = () => {
  const [pokemonsData, setPokemonsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setPokemonsData(response.data);
      } catch (error) {
        setError("Error fetching the data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress disableShrink />
      </Box>
    );
  if (error) return <p>{error}</p>;
  if (!pokemonsData || !pokemonsData.results) return <p>No data available</p>;

  return (
    <main className="main-pokemons">
      <p>Pokemons</p>
      <div className="pokemons-div1">
        {pokemonsData.results.map((pokemon, index) => {
          return (
            <Link to={`/pokemon/${pokemon.name}`} key={pokemon.name}>
              <div className="pokemons-div2">
                <p>{pokemon.name}</p>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    index + 1
                  }.png`}
                  alt={pokemon.name}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Pokemons;
