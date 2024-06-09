import React, { useState } from "react";
import styles from "./project.module.css";
import { projectItem } from "./pfoject.data";
import project from "../../assets/project.jpg";
import ReactModal from "react-modal";

const Project = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.aboutThumb}>
          <div className={styles.title}>
            <h3>Проекты</h3>
            <h2>
              Кросс-платформенная система учета результатов биржевых торгов
            </h2>
          </div>
          <div className={styles.description}>
            <p>
              Один из моих недавних и наиболее значимых проектов – это
              разработка кросс-платформенной системы учета результатов биржевых
              торгов по обыкновенным акциям. Эта система позволяет
              пользователям:
            </p>
            <ul>
              {projectItem.map((i, id) => (
                <section key={id}>
                  <li className={styles.titleDesc}>{i.title}</li>
                  <p>{i.description}</p>
                </section>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.projectImg}>
          <img src={project} alt="" onClick={openModal} />
          <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Image Fullscreen"
            style={{
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
              },
            }}
          >
            <img src={project} style={{ width: "100%", height: "auto" }} />
            <button className={styles.modalBTn} onClick={closeModal}>
              Закрыть
            </button>
          </ReactModal>
        </div>
      </div>
    </div>
  );
};

export default Project;
