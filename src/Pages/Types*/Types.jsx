import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../Types*/types.css";

const Types = () => {
  const [typesData, setTypesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type");
        setTypesData(response.data);
      } catch (error) {
        console.error("Error fetching the data", error);
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

  return (
    <main>
      <div className="types-div1">
        {typesData.results.map((type) => (
          <div key={type.name} className="types-div2">
            <Link to={`/type/${type.name}`}>{type.name}</Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Types;
