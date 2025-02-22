import React, { useState } from "react";
import Filtros from "./Filtros";
import ListadoLibros from "./ListadoLibros";
import styles from "./Catalogo.module.css";

const Catalogo = () => {
  const [filtros, setFiltros] = useState({});

  const handleFilterChange = (name, value) => {
    setFiltros((prevFiltros) => ({
      ...prevFiltros,
      [name]: value,
    }));
  };

  return (
    <div className={styles.catalogoContainer}>
      <Filtros onFilterChange={handleFilterChange} />
      {/* Pasamos los filtros al componente ListadoLibros */}
      <ListadoLibros filtros={filtros} />
    </div>
  );
};

export default Catalogo;
