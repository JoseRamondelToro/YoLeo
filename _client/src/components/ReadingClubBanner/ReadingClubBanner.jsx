import React from "react";
import styles from "./ReadingClubBanner.module.css";
import clubLecturaImg from "./clublectura.jpg"; // Asegúrate de tener la imagen en la carpeta del componente

const ReadingClubBanner = () => (
  <section className={styles.readingClubBanner}>
    <div className={styles.bannerImage}>
      <img src={clubLecturaImg} alt="Club de lectura" />
    </div>
    <div className={styles.bannerContent}>
      <h2>Club de lectura virtual: Bajo la superficie</h2>
      <p>
        En septiembre leeremos Bajo la superficie de Daisy Johnson. Gretel, la
        protagonista treintañera de esta fascinante y a ratos perturbadora
        novela, se reúne con su madre, Sarah, que ahora sufre de alzhéimer,
        dieciséis años después de que ésta la abandonara. Gretel es lexicógrafa
        y se gana la vida actualizando entradas de diccionarios, así que sabe
        bien que las palabras no son inmutables.
      </p>
      <a href="#">Para más información haz clic aquí</a>
    </div>
  </section>
);

export default ReadingClubBanner;
