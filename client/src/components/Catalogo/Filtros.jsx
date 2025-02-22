import React from "react";
import styles from "./Filtros.module.css";

const Filtros = ({ onFilterChange }) => {
  const handleFilterChange = (filter) => {
    onFilterChange(filter);
  };

  return (
    <div className={styles.filtros}>
      <h3>Filtrar por</h3>
      <ul>
        <li>
          <a href="#" onClick={() => handleFilterChange("disponibles")}>
            Títulos disponibles
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleFilterChange("recomendados")}>
            Recomendados para ti
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleFilterChange("recomendados")}>
            Recientemente adquiridos
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleFilterChange("recomendados")}>
            Por fecha de publicación
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleFilterChange("recomendados")}>
            Alfabéticamente A - Z
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleFilterChange("recomendados")}>
            Alfabéticamente Z - A
          </a>
        </li>
      </ul>
      <hr />
      <h4>Materia</h4>
      <ul>
        <li>
          <a href="#" onClick={() => handleFilterChange("artes")}>
            Artes <span>(417)</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleFilterChange("ciencia-tecnologia")}>
            Ciencia y tecnología <span>(546)</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleFilterChange("ciencias-tierra")}>
            Ciencias de la tierra y medio ambiente <span>(272)</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleFilterChange("ciencias-sociales")}>
            Ciencias sociales <span>(1470)</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleFilterChange("ficcion")}>
            Ficción <span>(11828)</span>
          </a>
        </li>
        {/* Añadir más categorías aquí */}
      </ul>
      <hr />
      <div className={styles.otrosRecursos}>
        <h4>Otros recursos</h4>
        <ul>
          <li>
            <a
              href="#"
              onClick={() => handleFilterChange("libros-electronicos")}
            >
              Libros electrónicos <span>(19703)</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleFilterChange("videos")}>
              Vídeos <span>(4132)</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleFilterChange("audiolibros")}>
              Audiolibros <span>(2111)</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filtros;
