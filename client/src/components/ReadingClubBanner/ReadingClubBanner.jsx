import React, { useState } from "react";
import styles from "./ReadingClubBanner.module.css";
import clubLecturaImg from "./clublectura.jpg";
import bookPresentationImg from "./bookpresentation.jpg"; // Asegúrate de tener esta imagen en la carpeta del componente

const newsItems = [
  {
    id: 1,
    image: clubLecturaImg,
    title: "Club de lectura virtual: Bajo la superficie",
    content:
      "En septiembre leeremos Bajo la superficie de Daisy Johnson. Gretel, la protagonista treintañera de esta fascinante y a ratos perturbadora novela, se reúne con su madre, Sarah, que ahora sufre de alzhéimer, dieciséis años después de que ésta la abandonara. Gretel es lexicógrafa y se gana la vida actualizando entradas de diccionarios, así que sabe bien que las palabras no son inmutables.",
    link: "#",
  },
  {
    id: 2,
    image: bookPresentationImg,
    title: "Presentación del libro: Historias de Cochabamba",
    content:
      "Acompáñanos este viernes a las 19:00 en la presentación de 'Historias de Cochabamba', un nuevo libro que celebra nuestra historia y cultura local.",
    link: "#",
  },
];

const ReadingClubBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <section className={styles.readingClubBanner}>
      <div className={styles.carousel}>
        {newsItems.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.carouselItem} ${
              index === currentSlide ? styles.active : ""
            }`}
          >
            <div className={styles.bannerImage}>
              <img src={item.image} alt={item.title} />
            </div>
            <div className={styles.bannerContent}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <a href={item.link} className={styles.infoButton}>
                Para más información haz clic aquí
              </a>
            </div>
          </div>
        ))}
        <button className={styles.prevButton} onClick={prevSlide}>
          &#10094;
        </button>
        <button className={styles.nextButton} onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default ReadingClubBanner;
