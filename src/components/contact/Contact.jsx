import styles from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { setName, setEmail, setMessage } from "../../redux/slices/formSlice";

const Contact = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  console.log(form.name, form.email, form.message);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setName(formData.name));
    dispatch(setEmail(formData.email));
    dispatch(setMessage(formData.message));
    alert("Форма отправлена!");
  };

  return (
    <section className={styles.parallasxSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.column}>
            <div className={styles.sectionTitle}>
              <h2>Связаться со мной</h2>
              <p>
                Если хотите связаться со мной, либо оставить мне какое-то
                сообщение. Укажите свои данные в форме:
              </p>
            </div>
          </div>
          <div className={styles.column}>
            <div>
              <form
                action="#"
                method="post"
                id="contact-form"
                onSubmit={handleSubmit}
              >
                <div className={styles.row}>
                  <div className={styles.formItem}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Имя"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.formItem}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={styles.formItem}>
                  <textarea
                    name="message"
                    placeholder="Сообщение"
                    id=""
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
          <div className={styles.columnbtn}>
            <button
              id="submit"
              type="submit"
              className={styles.btnItem}
              name="submit"
              onClick={handleSubmit}
            >
              Отправить сообщение
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
