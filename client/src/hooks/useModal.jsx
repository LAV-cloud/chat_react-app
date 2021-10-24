import React, { useState } from 'react';
import styles from '../styles/modal.module.scss';

export default function useModal() {
  let [open, setOpen] = useState(false);

  return {
    toggle: (value) => setOpen(value ? value : (open = !open)),
    Trigger: ({ children }) => (
      <div onClick={() => setOpen(true)}>{children}</div>
    ),
    Window: ({ children }) => (
      <>
        {open && (
          <>
            <div onClick={() => setOpen(false)} className={styles.modal}></div>
            <div className={styles.modal__body}>{children}</div>
          </>
        )}
      </>
    ),
  };
}
