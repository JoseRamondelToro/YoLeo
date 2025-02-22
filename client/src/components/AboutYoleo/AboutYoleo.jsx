import React from "react";
import styles from "./AboutYoLeo.module.css";
import dondequierasImg from "./donde_quieras.jpg";
import recursosVariadosImg from "./recursos_variados.jpg";
import lecturaParaTodosImg from "./lectura_para_todos.jpg";
import accesoGratuitoImg from "./acceso_gratuito.jpg";

const AboutYoLeo = () => (
  <section className={styles.aboutYoleo}>
    <h2>Sobre YoLeo</h2>
    <div className={styles.aboutGrid}>
      <div className={styles.aboutItem}>
        <img src={dondequierasImg} alt="Lee donde quieras" />
        <h3>LEE DONDE QUIERAS</h3>
        <p>
          Disfruta de la libertad de leer donde quieras y en el dispositivo que
          prefieras. YoLeo sincroniza automáticamente tu lectura en todos tus
          dispositivos, lo que te permite continuar tu lectura sin
          interrupciones, ya sea en casa, en el trabajo o en movimiento.
        </p>
        <a href="#" className={styles.moreDetails}>
          MÁS DETALLES &raquo;
        </a>
      </div>
      <div className={styles.aboutItem}>
        <img src={recursosVariadosImg} alt="Recursos Variados" />
        <h3>RECURSOS VARIADOS</h3>
        <p>
          Tome prestados libros electrónicos y audiolibros electrónicos
          populares y más vendidos para adultos. Lea sus cómics, libros
          gráficos, ficción o títulos de no ficción favoritos. ¡El límite de
          pago es de 15 artículos gratis por hasta 14 días!
        </p>
        <a href="#" className={styles.moreDetails}>
          MÁS DETALLES &raquo;
        </a>
      </div>
      <div className={styles.aboutItem}>
        <img src={lecturaParaTodosImg} alt="Lectura para Todos" />
        <h3>LECTURA PARA TODOS</h3>
        <p>
          ¡Obtenga los últimos títulos de ficción, no ficción, romance,
          literatura o suspenso para lectores adultos! ¡Disfrute en cualquier
          momento con un límite de pago de 15 artículos gratis por hasta 14
          días!
        </p>
        <a href="#" className={styles.moreDetails}>
          MÁS DETALLES &raquo;
        </a>
      </div>
      <div className={styles.aboutItem}>
        <img src={accesoGratuitoImg} alt="Acceso Gratuito" />
        <h3>ACCESO GRATUITO</h3>
        <p>
          YoLeo es el mejor lugar para leer, escuchar audiolibros, ver películas
          y mucho más. Y todo de manera gratuita, tan solo con tus datos
          personales o los de tus padres si eres menor de edad.
        </p>
        <a href="#" className={styles.moreDetails}>
          MÁS DETALLES &raquo;
        </a>
      </div>
    </div>
  </section>
);

export default AboutYoLeo;
