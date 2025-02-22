import React from "react";
import styles from "./PrestamosReservas.module.css";
import { useLoanContext } from "../../LoanContext";

const PrestamosReservas = () => {
  const { loans } = useLoanContext(); // Accede a los préstamos desde el contexto

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Préstamos y reservas</h2>

      <div className={styles.status}>
        Tienes todavía derecho a <strong>10 préstamos</strong> y{" "}
        <strong>7 reservas</strong>.
      </div>

      <section className={styles.prestamos}>
        <h3>Préstamos</h3>
        <div className={styles.prestamosActivos}>
          <h4>Préstamos activos</h4>
          {loans.length === 0 ? (
            <p>No tienes ningún préstamo activo.</p>
          ) : (
            <ul>
              {loans.map((loan) => (
                <li key={loan.id}>
                  {loan.title} - Devolución el <strong>{loan.dueDate}</strong>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
};

export default PrestamosReservas;
