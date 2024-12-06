import { Outlet } from 'react-router-dom';
import './movie.css';

const Movie = () => {
  return (
    <>
    <h1 style={{
        color: "RED", // Soft pinkish color
        fontSize: "2rem",
        fontWeight: "bold",
        borderBottom: "3px solid  RED", // Light pink border
        paddingBottom: "15px",
        marginBottom: "10px",
        letterSpacing: "1px",
        textTransform: "capitalize",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // Subtle shadow for elegance
      }}>
        ADT
      </h1>

      <Outlet />
    </>
  );
};

export default Movie;