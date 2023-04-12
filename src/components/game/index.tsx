/** @format */

import React from 'react';
import styles from './Game.module.scss';

export const Game = () => {
  const [numberOne, setNumberOne] = React.useState('');
  const [numberTwo, setNumberTwo] = React.useState('');
  const [result, setResult] = React.useState('');
  const onClickCompare = () => {
    let n1 = Number(numberOne);
    let n2 = Number(numberTwo);
    while (n1 !== n2) {}
  };
  return (
    <div className={styles.game}>
      <div className={styles.title}>Numbers game</div>
      <div className={styles.info}>
        <div className={styles.user}>Number: 1</div>
        <input
          onChange={(e) => setNumberOne(e.target.value)}
          value={numberOne}
          type="number"
          className={styles.number}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.user}>Number: 2</div>
        <input
          onChange={(e) => setNumberTwo(e.target.value)}
          value={numberTwo}
          type="number"
          className={styles.number}
        />
      </div>
      <button className={styles.btn}>Compare</button>
      <div className={styles.info}>
        <div className={styles.user}>Result:</div>
        <div className={styles.result}></div>
      </div>
    </div>
  );
};
