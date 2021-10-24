import React from 'react';
import useInput from '../hooks/useInput';
import useFile from '../hooks/useFile';
import styles from '../styles/addChat.module.scss';

export default function AddChat() {
  const name = useInput();
  const description = useInput();
  const avatar = useFile(null, 5);

  return (
    <div className={styles.add}>
      <form className={styles.add__form}>
        <label className={styles.add__file}>
          {!avatar.value() ? (
            <p className={styles.add__name}>Upload avatar</p>
          ) : (
            <img
              className={styles.add__img}
              src={avatar.value().img}
              alt={avatar.value().name}
            />
          )}
          <input {...avatar.bind} type="file" hidden />
        </label>
        <label className={styles.add__label}>
          <p className={styles.add__name}>Name</p>
          <input className={styles.add__input} {...name.bind} type="text" />
        </label>
        <label className={styles.add__label}>
          <p className={styles.add__name}>Description</p>
          <input
            className={styles.add__input}
            {...description.bind}
            type="text"
          />
        </label>
        <button className={styles.add__submit} type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
