import React, { useState, useEffect, useContext } from 'react';
import Message from './message';
import { IoSendSharp } from 'react-icons/io5';
import { BsFillImageFill } from 'react-icons/bs';
import useInput from './../hooks/useInput';
import useFile from '../hooks/useFile';
import styles from '../styles/chat.module.scss';
import useModal from '../hooks/useModal';

export default function Chat() {
  const Modal = useModal();
  const text = useInput();
  const image = useFile();
  const [messages, setMessages] = useState([
    {
      author: 'Romka',
      type: 'text',
      text: 'to=format&fit=crop&w=764&q=80',
      date: Date.now(),
    },
  ]);

  return (
    <div className={styles.chat}>
      {image.value() && (
        <Modal.Window>
          <div className={styles.chat__modal}>
            <img
              className={styles.chat__fileImg}
              src={image.value() ? image.value().img : ''}
              alt={image.value() ? image.value().name : ''}
            />
            <button className={styles.chat__fileSubmit}>Send image</button>
          </div>
        </Modal.Window>
      )}
      <div className={styles.chat__messages}>
        {messages.map((message, i) => {
          return <Message key={i} message={message} />;
        })}
      </div>
      <div className={styles.chat__text}>
        <form className={styles.chat__form}>
          <label
            onClick={() => {
              image.clear();
              Modal.toggle(true);
            }}
            className={styles.chat__file}
          >
            <BsFillImageFill />
            <input {...image.bind} type="file" hidden />
          </label>
          <hr />
          <input
            placeholder="Message"
            className={styles.chat__input}
            type="text"
            {...text.bind}
          />
          <button type="submit" className={styles.chat__btn}>
            <IoSendSharp />
          </button>
        </form>
      </div>
    </div>
  );
}
