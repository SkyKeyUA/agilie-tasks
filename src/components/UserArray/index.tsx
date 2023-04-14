/** @format */

import React from 'react';
import styles from './UserArray.module.scss';
export const UserArray = () => {
  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState('');
  const onClickArray = () => {
    let chunk: number[] = [];
    let userArray = Number(value);
    let repeatElements;
    if (userArray > 0) {
      for (let i = 0; i < userArray; i++) {
        chunk.push(Math.floor(Math.random() * userArray + 1));
      }
      // if you want to find the first repeating element
      // repeatElements = chunk.find((obj, i) => chunk.indexOf(obj) !== i);
      repeatElements = chunk.filter((obj, i) => chunk.indexOf(obj) !== i);
      repeatElements = repeatElements.filter((obj, i, s) => s.indexOf(obj) === i);
      // another way to filter out
      // repeatElements = Array.from(new Set(repeatElements));
      console.log(repeatElements);
      if (repeatElements.length <= 0) {
        return setResult(`Your array [${chunk}], you have no repeating elements`);
      }
      return setResult(`Your array [${chunk}]. All repeating elements [${repeatElements}]`);
    } else {
      return setResult('Please, selects positive numbers');
    }
  };
  return (
    <div className={styles.userArray}>
      <div className={styles.title}>Task 2</div>
      <div className={styles.info}>User Array</div>
      <div className={styles.info}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={styles.input}
          type="number"
        />
      </div>
      <button onClick={onClickArray} className={styles.btn}>
        Array
      </button>
      <div className={styles.info}>
        <div className={styles.user}>Result:</div>
        <div className={styles.result}>{result}</div>
      </div>
    </div>
  );
};
