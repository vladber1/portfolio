import React from "react";
import styles from "./Skills.module.css";
import { skillsItem } from "./skills.data";

const Skills = () => {
  return (
    <section className={styles.parallasxSection}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.sectionTitle}>
            <h2>Профессиональные навыки и компетенции</h2>
          </div>
        </div>
        <div className={styles.row}>
          {skillsItem.map((item, id) => (
            <div className={styles.column} key={id}>
              <div className={styles.workThumb}>
                <div className={styles.icon}>
                  <img src={item.icons} alt="" width={50} height={50} />
                </div>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.description}>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.sectionTitle}></div>
      </div>
    </section>
  );
};

export default Skills;
