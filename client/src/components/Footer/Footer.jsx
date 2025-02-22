import React from "react";
import styles from "./Footer.module.css";
import yoleoLogo from "./logotipo.png";

// Iconos de redes sociales
import facebookIcon from "./facebook.svg";
import instagramIcon from "./instagram.svg";
import tiktokIcon from "./tiktok.png";
import xIcon from "./x.png";
import youtubeIcon from "./youtube.png";
import playstoreIcon from "./playstore.png";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.socialDownloadSection}>
        <div className={styles.socialMediaIcons}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="Facebook" className={styles.icon} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className={styles.icon} />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tiktokIcon} alt="TikTok" className={styles.icon} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={xIcon} alt="X" className={styles.icon} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtubeIcon} alt="YouTube" className={styles.icon} />
          </a>
        </div>
        <div className={styles.downloadApp}>
          <span>Descarga la aplicación </span>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.playStoreLink}
          >
            <img
              src={playstoreIcon}
              alt="Google Play Store"
              className={styles.playStoreIcon}
            />
          </a>
        </div>
      </div>
      <hr className={styles.footerHr} /> {/* Agregamos la clase footerHr */}
      <img src={yoleoLogo} alt="YoLeo" className={styles.logo} />
      <nav className={styles.footerNav}>
        <a href="#">Condiciones de uso</a>
        <a>-</a>
        <a href="#">Contáctanos</a>
        <a>-</a>
        <a href="#">Política de privacidad</a>
        <a>-</a>
        <a href="#">Donaciones</a>
      </nav>
      <hr className={styles.footerHr} /> {/* Mismo cambio para el segundo hr */}
    </div>
  </footer>
);

export default Footer;
