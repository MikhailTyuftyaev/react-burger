import React from "react";
import styles from "./404.module.css";

export function NotFound404() {
  return (
      <div className={styles.wrapper}>
        <p className={`${styles.main_text} text text_type_digits-large`}>404</p>
        <p className={`${styles.main_text} text text_type_digits-medium`}>Page Not Found</p>
      </div>
  );
}
