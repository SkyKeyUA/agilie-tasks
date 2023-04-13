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
    if (n1 >= 0 && n2 >= 0) {
      if (n1 === n2) {
        return setResult(`We don't need to convert (${n1} = ${n2})`);
      }
      if (n1 * 2 === n2) {
        return setResult(
          `We can convert the Number 1 to the Number 2 by multiplying this number by 2 (${n1} * 2 = ${n2}) | ${
            n1 * 2
          } = ${n2}`,
        );
      }
      if (n2 * 2 === n1) {
        return setResult(
          `We can convert the Number 2 to the Number 1 by multiplying this number by 2 (${n2} * 2 = ${n1}) | ${
            n2 * 2
          } = ${n1}`,
        );
      }
      if (Number(n1 + '1') === n2) {
        return setResult(
          `We can convert the Number 1 to the Number 2 by adding one to the right (${n1} + 1 = ${n2}) | ${
            n1 + '1'
          } = ${n2}`,
        );
      }
      if (Number(n2 + '1') === n1) {
        return setResult(
          `We can convert the Number 2 to the Number 1 by adding one to the right (${n2} + 1 = ${n1}) | ${
            n2 + '1'
          } = ${n1}`,
        );
      }
      if (n1 !== n2) {
        return setResult(`We cannot convert one number to another`);
      }
    } else {
      return setResult('Please, selects positive numbers');
    }
  };
  return (
    <div className={styles.game}>
      <div className={styles.title}>Task 1</div>
      <div className={styles.info}>Numbers game</div>
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
      <button onClick={onClickCompare} className={styles.btn}>
        Compare
      </button>
      <div className={styles.info}>
        <div className={styles.user}>Result:</div>
        <div className={styles.result}>{result}</div>
      </div>
    </div>
  );
};
