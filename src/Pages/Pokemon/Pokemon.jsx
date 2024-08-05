import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../Pokemon/pokemon.css";

const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        setPokemonData(response.data);
      } catch (error) {
        console.error("Error fetching the data", error);
        setError("Error fetching the data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [name]);

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

  return (
    <main>
      <div className="pokemon-div1">
        <p>{pokemonData.name}</p>
        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      </div>
      <div className="pokemon-div2">
        {pokemonData.types.map((typeInfo) => (
          <Link
            key={typeInfo.type.name}
            className="typeInfo"
            to={`/type/${typeInfo.type.name}`}
          >
            {typeInfo.type.name}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Pokemon;
