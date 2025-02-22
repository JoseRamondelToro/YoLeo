import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./BookDetail.module.css";

const BookDetail = () => {
  const { id } = useParams(); // Extraer el ID desde la URL
  const [libro, setLibro] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLibro = async () => {
      try {
        const response = await fetch(
          `http://localhost:1337/api/libros/${id}?populate=*`
        );
        const data = await response.json();

        const item = data.data;

        // Estructurar los datos del libro
        const libroData = {
          titulo: item.Titulo,
          autor: item.Autor,
          sinopsis: item.Sinopsis.map((s) =>
            s.children.map((c) => c.text).join(" ")
          ).join(" "),
          ejemplaresDisponibles: item.EjemplaresDisponibles,
          fechaDisponible: item.FechaDisponible,
          imagen: `http://localhost:1337${item.Portada.url}`,
          archivoEpub: `http://localhost:1337${item.Archivo.url}`,
        };

        setLibro(libroData);
      } catch (err) {
        console.error("Error fetching libro:", err);
        setError("No se pudo cargar el libro.");
      }
    };

    fetchLibro();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!libro) return <p>Cargando...</p>;

  return (
    <div className={styles.bookDetailContainer}>
      <div className={styles.leftPanel}>
        <img
          src={libro.imagen}
          alt={`Portada de ${libro.titulo}`}
          className={styles.bookCover}
        />
        <div className={styles.rentalOptions}>
          <p>{libro.ejemplaresDisponibles} ejemplares disponibles</p>
          <button className={styles.rentButton}>Prestar</button>
          {libro.archivoEpub && (
            <a
              href={libro.archivoEpub}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.previewButton}
            >
              Leer EPUB
            </a>
          )}
        </div>
      </div>

      <div className={styles.rightPanel}>
        <h1>{libro.titulo}</h1>
        <h2>{libro.autor}</h2>
        <p>{libro.sinopsis}</p>
      </div>
    </div>
  );
};

export default BookDetail;
