import React from "react";
import styles from "./About.module.css";
import { aboutItem } from "./about.data";

const About = () => {
  return (
    <div className={styles.wrapper} id="targetSection">
      <div className={styles.container}>
        <div className={styles.descriptionBlock}>
          <div className={styles.aboutThumb}>
            <div className={styles.title}>
              <h3>Прикладная информатика</h3>
            </div>
            <div className={styles.description}>
              <p>
                Меня зовут Владислав Бернацкий, и я студент третьего курса по
                направлению прикладной информатики. Мне 21 год, и за время
                обучения я успел реализовать ряд значимых проектов, которые не
                только углубили мои знания и навыки в области информационных
                технологий, но и принесли реальную пользу пользователям.
              </p>
            </div>
          </div>
          <div className={styles.aducationBlock}>
            <div className={styles.aducationTitle}>
              <h2>Личные качества</h2>
              <ul>
                {aboutItem.map((item, id) => (
                  <section className={styles.aducationInfo} key={id}>
                    <li>{item.title}</li>
                    <p>{item.description}</p>
                  </section>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.personalQualities}>
            <h2>Образование и стремление к развитию</h2>
            <h4>
              Я непрерывно совершенствую свои знания и навыки, участвуя в
              различных семинарах, вебинарах и курсах. Моя цель – стать
              высококвалифицированным специалистом в области прикладной
              информатики, способным разрабатывать инновационные решения,
              которые будут востребованы на рынке.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
