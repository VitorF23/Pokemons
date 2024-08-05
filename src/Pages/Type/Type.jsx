import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../Type/type.css";

const Type = () => {
  const [typeData, setTypeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { type } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/type/${type}`
        );
        setTypeData(response.data);
      } catch (error) {
        console.error("Error fetching the data", error);
        setError("Error fetching the data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [type]);

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
    <main className="main-div">
      <h1>Pokémon of type {type}</h1>
      <div className="pokemons-div-1">
        {typeData.pokemon.map((pokemonEntry, index) => {
          const pokemonId = pokemonEntry.pokemon.url
            .split("/")
            .slice(-2, -1)[0];
          return (
            <div key={index} className="pokemons-div-2">
              <Link to={`/pokemon/${pokemonEntry.pokemon.name}`}>
                <p>{pokemonEntry.pokemon.name}</p>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                  alt={pokemonEntry.pokemon.name}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Type;
