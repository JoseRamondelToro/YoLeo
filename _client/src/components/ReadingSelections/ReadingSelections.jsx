import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ReadingSelections.module.css";
import book1 from "./book1.jpg";
import book2 from "./book2.jpg";
import book3 from "./book3.jpg";
import book4 from "./book4.jpg";
import book5 from "./book5.jpg";
import book6 from "./book6.jpg";
import book7 from "./book7.jpg";

const ReadingSelections = () => {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate("/book-detail"); // Redirige a la ruta de detalles del libro
  };

  return (
    <section className={styles.readingSelections}>
      <h2>Selecciones de lectura</h2>
      <div className={styles.selectionTabs}>
        <button>Mes del terror</button>
        <button>Regreso a clases</button>
        <button>Documentos históricos</button>
        <button>Los mejor valorados</button>
        <button>Recomendaciones para tí</button>
      </div>
      <div className={styles.selectionBooks}>
        <div className={styles.bookBlock} onClick={handleBookClick}>
          <img src={book1} alt="Book 1" />
        </div>
        <div className={styles.bookBlock} onClick={handleBookClick}>
          <img src={book2} alt="Book 2" />
        </div>
        <div className={styles.bookBlock} onClick={handleBookClick}>
          <img src={book3} alt="Book 3" />
        </div>
        <div className={styles.bookBlock} onClick={handleBookClick}>
          <img src={book4} alt="Book 4" />
        </div>
        <div className={styles.bookBlock} onClick={handleBookClick}>
          <img src={book5} alt="Book 5" />
        </div>
        <div className={styles.bookBlock} onClick={handleBookClick}>
          <img src={book6} alt="Book 6" />
        </div>
        <div className={styles.bookBlock} onClick={handleBookClick}>
          <img src={book7} alt="Book 7" />
        </div>
      </div>

      {/* Botón debajo */}
      <button className={styles.exploreMore}>
        Explora el catálogo y selecciona tu próxima lectura
      </button>
    </section>
  );
};

export default ReadingSelections;
