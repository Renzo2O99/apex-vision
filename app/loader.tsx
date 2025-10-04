
import React from "react";

import styles from "@/styles/Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}>
        <div className={styles.loaderOrbits}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={styles.electron}
              style={{ "--index": i } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
