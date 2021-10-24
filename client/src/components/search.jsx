import React, { useState, useEffect } from 'react';
import useInput from '../hooks/useInput';
import styles from '../styles/search.module.scss';
import ChatItem from './chatItem';

export default function Search({ items }) {
  const search = useInput('');
  const [searchResult, setSearchResult] = useState(items);

  useEffect(() => {
    let result = [];

    items.map((item) => {
      if (item.toLowerCase().indexOf(search.value().toLowerCase()) > -1) {
        result = [...result, item];
      }
      return item;
    });

    setSearchResult(result);
  }, [search.value()]);

  return (
    <div className={styles.search}>
      <input
        className={styles.search__input}
        placeholder="For search"
        type="text"
        {...search.bind}
      />
      <div className={styles.search__list}>
        <h4 className={styles.search__title}>Search result: </h4>
        {searchResult.length <= 0 ? (
          <div className={styles.search__not}>
            <p>Not found</p>
          </div>
        ) : (
          <>
            {searchResult.map((item, i) => {
              return <ChatItem item={item} key={i} />;
            })}
          </>
        )}
      </div>
    </div>
  );
}
