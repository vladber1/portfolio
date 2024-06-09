import React from "react";
import styles from "./Container.module.css";
import arrow from "../../assets/arrow.svg";
import { Link, animateScroll as scroll } from "react-scroll";

const Container = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <section>
          <div className={styles.title}>
            <div className={styles.homeWrapper}>
              <h3>Прикладная информатика</h3>
              <h1>
                О Владиславе Бернацком
                <br />
                Студент 3 курса, 21 год
              </h1>
              <Link to="targetSection" smooth={true} duration={500}>
                <div className={styles.btnBlock}>
                  <img src={arrow} alt="" width={25} height={25} />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Container;
