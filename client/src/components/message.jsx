import React from 'react';
import styles from '../styles/message.module.scss';

export default function Message({ message }) {
  return (
    <div className={styles.message}>
      <div className={styles.message__author}>
        <img
          alt={message.author}
          className={styles.message__authorImg}
          src="https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
        />
        <p className={styles.message__authorName}>{message.author}</p>
      </div>
      <div className={styles.message__data}>
        {message.type === 'image' ? (
          <img
            className={styles.message__img}
            src={message.text}
            alt={message.author}
          />
        ) : (
          <p className={styles.message__text}>{message.text}</p>
        )}
        <p className={styles.message__date}>
          {new Date(message.date).toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
      </div>
    </div>
  );
}
