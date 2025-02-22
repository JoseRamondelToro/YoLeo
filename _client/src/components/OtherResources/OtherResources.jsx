import React from "react";
import styles from "./OtherResources.module.css";

const OtherResources = () => (
  <section className={styles.otherResources}>
    <h2>Otros recursos disponibles</h2>
    <div className={styles.resourcesGrid}>
      <div className={`${styles.resourceBlock} ${styles.videos}`}>Videos</div>
      <div className={`${styles.resourceBlock} ${styles.audiolibros}`}>
        Audiolibros
      </div>
      <div className={`${styles.resourceBlock} ${styles.hemeroteca}`}>
        Hemeroteca
      </div>
      <div className={`${styles.resourceBlock} ${styles.fotografia}`}>
        Fotografía
      </div>
    </div>
  </section>
);

export default OtherResources;
