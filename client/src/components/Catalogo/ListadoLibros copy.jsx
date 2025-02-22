import React from "react";
import styles from "./ListadoLibros.module.css";
// Importa las imágenes
import book1 from "./book1.jpg";
import book2 from "./book2.jpg";
import book3 from "./book3.jpg";
import book4 from "./book4.jpg";
import book5 from "./book5.jpg";

const ListadoLibros = () => {
  const libros = [
    {
      id: 1,
      titulo: "Quedará el amor",
      autor: "Alice Kellen",
      sinopsis:
        "La gran novela de Alice Kellen. Un amor tan intenso y cálido como una tarde de verano...",
      disponible: false,
      fechaDisponible: "5 nov 2024 a las 12:09",
      imagen: book1, // Usar la variable importada
    },
    {
      id: 2,
      titulo: "Ship Breaker nº 01/03",
      autor: "Paolo Bacigalupi",
      sinopsis:
        "Primera parte de esta trilogía de ciencia ficción. En la costa de lo que una vez fue el golfo de México...",
      disponible: true,
      ejemplaresDisponibles: 1,
      imagen: book2, // Usar la variable importada
    },
    {
      id: 3,
      titulo: "La Chica del Tren",
      autor: "Paula Hawkins",
      sinopsis:
        "Una novela intrigante sobre una mujer que observa la vida de los demás desde un tren...",
      disponible: true,
      ejemplaresDisponibles: 3,
      imagen: book3, // Usar la variable importada
    },
    {
      id: 4,
      titulo: "El Juego del Ángel",
      autor: "Carlos Ruiz Zafón",
      sinopsis:
        "Una historia de misterio y magia ambientada en la Barcelona de los años 20...",
      disponible: false,
      fechaDisponible: "10 dic 2024 a las 14:30",
      imagen: book4, // Usar la variable importada
    },
    {
      id: 5,
      titulo: "El Resplandor",
      autor: "Stephen King",
      sinopsis:
        "Una de las obras maestras del terror psicológico, donde un hotel esconde terribles secretos...",
      disponible: true,
      ejemplaresDisponibles: 5,
      imagen: book5, // Usar la variable importada
    },
  ];

  return (
    <div className={styles.librosListado}>
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
              <p>{libro.sinopsis}</p>
              <a href="/book-detail" className={styles.verFicha}>
                Ver la ficha »
              </a>
            </div>
          </div>
          <div className={styles.libroAccion}>
            <p>{libro.recurso}</p>
            {libro.disponible ? (
              <>
                <p>{libro.ejemplaresDisponibles} ejemplares disponibles</p>
                <button className={styles.prestarButton}>Prestar</button>
              </>
            ) : (
              <>
                <p>Disponible el {libro.fechaDisponible}</p>
                <button className={styles.reservarButton}>Reservar</button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListadoLibros;
