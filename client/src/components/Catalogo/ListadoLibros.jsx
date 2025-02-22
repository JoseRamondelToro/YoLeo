import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLoanContext } from "../../LoanContext"; // Importa el contexto
import styles from "./ListadoLibros.module.css";

const ListadoLibros = () => {
  const [libros, setLibros] = useState([]);
  const [error, setError] = useState(null);
  const { addLoan } = useLoanContext(); // Accede a la función addLoan del contexto

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/libros?populate=*"
        );
        const data = await response.json();

        const librosData = data.data.map((item) => ({
          id: item.id,
          titulo: item.Titulo,
          autor: item.Autor,
          sinopsis: item.Sinopsis.map((s) =>
            s.children.map((c) => c.text).join(" ")
          ).join(" "),
          disponible: item.Disponible,
          ejemplaresDisponibles: item.EjemplaresDisponibles,
          fechaDisponible: item.FechaDisponible,
          imagen: `http://localhost:1337${item.Portada.url}`,
          archivoEpub: `http://localhost:1337${item.Archivo.url}`,
        }));

        setLibros(librosData);
      } catch (err) {
        console.error("Error fetching libros:", err);
        setError("Error al cargar los libros.");
      }
    };

    fetchLibros();
  }, []);

  // Función para limitar la sinopsis a 120 palabras
  const limitarSinopsis = (texto, limitePalabras = 80) => {
    const palabras = texto.split(" ");
    return palabras.length > limitePalabras
      ? palabras.slice(0, limitePalabras).join(" ") + "..."
      : texto;
  };

  // Función para manejar el préstamo
  const handlePrestar = (libro) => {
    addLoan({
      id: libro.id,
      title: libro.titulo,
    });
    alert(`Has prestado el libro: ${libro.titulo}`);
  };

  return (
    <div className={styles.librosListado}>
      {error && <p>{error}</p>}
      {libros.map((libro) => (
        <div key={libro.id} className={styles.libroItem}>
          <div className={styles.libroInfo}>
            <img
              src={libro.imagen}
              alt={libro.titulo}
              className={styles.libroImagen}
            />
            <div className={styles.detalles}>
              <h4>{libro.titulo}</h4>
              <p>
                Autor: <span className={styles.autor}>{libro.autor}</span>
              </p>
              <p>{limitarSinopsis(libro.sinopsis)}</p>
              <Link to={`/book-detail/${libro.id}`} className={styles.verFicha}>
                Ver la ficha »
              </Link>
            </div>
          </div>
          <div className={styles.libroAccion}>
            {libro.disponible ? (
              <>
                <p>{libro.ejemplaresDisponibles} ejemplares disponibles</p>
                <button
                  className={styles.prestarButton}
                  onClick={() => handlePrestar(libro)} // Agrega el libro al contexto
                >
                  Prestar
                </button>
              </>
            ) : (
              <>
                <p>Disponible el {libro.fechaDisponible}</p>
                <button className={styles.reservarButton}>Reservar</button>
              </>
            )}
            {libro.archivoEpub && (
              <a
                href={libro.archivoEpub}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.descargarButton}
              >
                Leer ejemplo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListadoLibros;
