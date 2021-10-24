import React from 'react';
import Search from './search';
import ChatItem from './chatItem';
import styles from '../styles/chatList.module.scss';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import AddChat from './addChat';
import useModal from '../hooks/useModal';

export default function ChatList({ items }) {
  const Modal = useModal();

  return (
    <div className={styles.list}>
      <div className={styles.list__row}>
        <Search items={items} />
        <Modal.Trigger>
          <button className={styles.list__add}>
            <AiOutlinePlusCircle />
          </button>
        </Modal.Trigger>
        <Modal.Window>
          <AddChat />
        </Modal.Window>
      </div>
      <div className={styles.list__items}>
        {items.map((item, i) => {
          return <ChatItem item={item} key={i} />;
        })}
      </div>
    </div>
  );
}
