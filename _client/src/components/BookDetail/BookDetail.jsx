import React, { useState } from "react";
import styles from "./BookDetail.module.css"; // Asegúrate de tener este archivo CSS
import book from "./La chica que vive al final del camino.jpg";
import book1 from "./book1.jpg";
import book2 from "./book2.jpg";
import book3 from "./book3.jpg";
import book4 from "./book4.jpg";
import book5 from "./book5.jpg";
import book6 from "./book6.jpg";
import book7 from "./book7.jpg";

const BookDetail = () => {
  const [review, setReview] = useState(""); // Para manejar el estado de la reseña

  const handleRentBook = () => {
    alert("Has alquilado el libro");
  };

  const handleReviewSubmit = () => {
    alert(`Reseña enviada: ${review}`);
  };

  const handleBookClick = () => {
    navigate("/book-detail"); // Redirige a la ruta de detalles del libro
  };

  return (
    <div className={styles.bookDetailContainer}>
      <div className={styles.leftPanel}>
        <img src={book} alt="Portada del libro" className={styles.bookCover} />
        <div className={styles.rentalOptions}>
          <p>EPUB</p>
          <p>Streaming</p>
          <p>Varios ejemplares disponibles</p>
          <button className={styles.rentButton} onClick={handleRentBook}>
            Prestar
          </button>
          <button className={styles.previewButton}>Vista previa</button>
        </div>
      </div>

      <div className={styles.rightPanel}>
        <h1>La chica que vive al final del camino</h1>
        <h2>Laird Koenig</h2>
        <p>
          Rynn acaba de cumplir trece años y lo celebra sola en su casa. Nadie
          sabe mucho de ella. Solo que se hace la interesante, no habla con
          nadie, cobra los cheques de viaje de su padre y da esquinazo a las
          visitas inoportunas. En su casa hace lo que quiere: fuma cigarrillos,
          se entrega a la poesía de Emily Dickinson y establece una amistad
          peculiar con un muchacho cojo que dice ser mago. Hace tiempo que su
          padre no se deja ver por el pueblo, y los vecinos empiezan a hacer
          preguntas: ¿dónde está su padre? ¿Qué se oculta en esa casa que se
          alza al final del camino? Laird Koening nos ofrece con esta oscura
          novela una obra maestra de la literatura gótica americana, que inspiró
          la película protagonizada por una joven Jodie Foster y por Martin
          Sheen. Una vuelta de tuerca al género de lo inquietante.
        </p>
        <div className={styles.genres}>
          <span>Horror</span>
          <span>Fiction</span>
          <span>Thriller</span>
          <span>Mystery</span>
        </div>
        <hr></hr>
        <h3>Títulos relacionados</h3>
        <div className={styles.recommendedBooks}>
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
        <hr></hr>
        <h3>Valoraciones y reseñas</h3>
        <div className={styles.review}>
          <p>⭐⭐⭐⭐⭐</p>
          <p>
            Una de esas historias cuya mayor virtud es la sensación de inquietud
            que transmiten. Es una lectura incómoda, dura, difícil, en la que
            muchas cosas parecen obvias, pero no lo son. El final me ha
            decepcionado un poco, me esperaba algo más, pero en general es una
            buena muestra de un género, el terror, que no estoy acostumbrada a
            leer. Quizá por ello no sé evaluar mejor esta lectura.
          </p>
        </div>
        <div className={styles.review}>
          <p>⭐⭐⭐</p>
          <p>
            Que buen libro! Admire la destreza de este hombre para desarrollar
            esta historia. Esa tenacidad para mantenerlo a uno atento y a la
            espera de nuevos acontecimientos. La excelente protagonista, ese
            aire oscuro, ágil. Sin duda un excelente libro para empezar octubre.
            Muy recomendado ❤️
          </p>
        </div>
        <div className={styles.reviewsSection}>
          <h4>Si ya acabaste el libro, cuéntanos tu opinión</h4>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className={styles.reviewInput}
          />
          <button onClick={handleReviewSubmit} className={styles.submitReview}>
            Escribe una reseña
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
