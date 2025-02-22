import React from "react";
import styles from "./BookClub.module.css";
import bookClubImage from "./bookclub.jpg";

const BookClub = () => (
  <section className={styles.bookClub}>
    {/* Título separado */}
    <h2 className={styles.bookClubTitle}>Clubes de lectura</h2>

    {/* Contenedor con imagen y contenido alineados horizontalmente */}
    <div className={styles.bookClubContentWrapper}>
      <div className={styles.bookClubImage}>
        <img src={bookClubImage} alt="Club de lectura" />
      </div>
      <div className={styles.bookClubContent}>
        <h3>Únete a nuestros clubes de lectura</h3>
        <p>
          ¡Únete a nuestros clubes de lectura online! Ya seas adulto,
          adolescente o niño, tenemos un espacio para ti. Descubre el placer de
          leer y compartir tus ideas con otros amantes de los libros. Nuestros
          clubes son el lugar perfecto para explorar nuevos mundos literarios,
          discutir tus historias favoritas y hacer nuevas amistades. ¡Anímate y
          forma parte de nuestra comunidad lectora!
        </p>
      </div>
    </div>

    {/* Botón debajo */}
    <button className={styles.bookClubButton}>
      Visita nuestros clubes de lectura y participa
    </button>
  </section>
);

export default BookClub;
