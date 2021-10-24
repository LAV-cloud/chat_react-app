import React from 'react';
import styles from '../styles/chatItem.module.scss';

export default function ChatItem({ item }) {
  return (
    <div className={styles.item}>
      <img
        className={styles.item__img}
        src="https://images.unsplash.com/photo-1626325525853-ab008f7324dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
        alt={item}
      />
      <p className={styles.item__name}>{item}</p>
    </div>
  );
}
