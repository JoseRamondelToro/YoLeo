import React from "react";
import styles from "./InfoPage.module.css";

const InfoPage = () => (
  <section className={styles.infoPage}>
    <h2>Información</h2>
    <h3>¿Qué es YoLeo?</h3>
    <p>
      YoLeo es un servicio gratuito de préstamo de libros electrónicos y otros
      recursos en línea.
    </p>

    <h3>¿Qué puede encontrar en YoLeo?</h3>
    <p>
      YoLeo cuenta con una extensa colección de libros, hemeroteca, audiolibros,
      películas y audios. Tanto novedades editoriales como clásicos, así como
      obras de interés general, incluyendo títulos de ficción y no ficción para
      público adulto.
    </p>

    <h3>¿Qué le ofrece YoLeo?</h3>
    <p>
      YoLeo ofrece una plataforma tecnológica que permite acceder al catálogo y
      realizar el préstamo de obras en formato digital para poder leerlas en
      diferentes dispositivos: tabletas, smartphone u ordenadores personales.
    </p>
    <p>
      Para garantizar el mejor soporte cuando su uso se realice desde smartphone
      la versión mínima para la instalación de la app de YoLeo en dispositivos
      Android es a partir de la versión 7.1.1.
    </p>

    <h3>Préstamo de Materiales</h3>
    <ul>
      <li>Libros electrónicos: 3</li>
      <li>Audiolibros: 2</li>
      <li>Películas: 2</li>
      <li>Audios: 2</li>
    </ul>

    <h3>Período de Préstamo</h3>
    <ul>
      <li>Libros electrónicos: 21 días</li>
      <li>Audiolibros: 21 días</li>
      <li>Películas: 2 horas</li>
      <li>Audios: 24 horas</li>
    </ul>

    <h3>Nº Máximo de Reservas</h3>
    <ul>
      <li>Libros electrónicos: 2</li>
      <li>Audiolibros: 1</li>
      <li>Películas: 2</li>
      <li>Audios: 2</li>
    </ul>

    <h3>¿Cómo puede utilizar YoLeo?</h3>
    <p>
      Para utilizar YoLeo es necesario darse de alta en el sistema a través de
      cualquiera de los dispositivos compatibles. Para ello debe disponer de una
      cuenta de correo electrónico y un dispositivo de lectura: ordenador,
      smartphone o tableta.
    </p>

    <h3>Alta en YoLeo</h3>
    <p>
      Los usuarios de YoLeo podrán acceder a la plataforma para realizar los
      préstamos identificándose mediante el número de su cédula de identidad y
      contraseña. La contraseña debe tener un máximo de ocho caracteres.
    </p>

    <h3>Conocer sus claves</h3>
    <p>
      Si no recuerda su contraseña, podrá obtener una nueva desde el siguiente
      enlace en el que deberá introducir su usuario y su correo electrónico (es
      importante que el correo electrónico que escriba coincida con el que
      proporcionó para el registro de lector en la biblioteca). Pulsa en aceptar
      y le llegará al correo electrónico un mensaje para cambiar la contraseña.
    </p>

    <h3>Su cuenta de correo</h3>
    <p>
      La cuenta de correo que proporcionó a YoLeo será la forma de comunicación
      del servicio. Si no recuerda la cuenta con la que se inscribió o ya no
      está activa, puede dirigirse al correo electrónico:
      yoleo_soporte@yoleo.com.bo
    </p>
    <br />
    <p>
      Más información sobre el servicio en correo electrónico:{" "}
      <a href="yoleo_soporte@yoleo.com.bo">yoleo_soporte@yoleo.com.bo</a>
    </p>
  </section>
);

export default InfoPage;
