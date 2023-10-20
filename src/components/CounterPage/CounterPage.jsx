import React, { useState } from "react"; 
import useCounter from '../useCounter';
import styles from '../CounterPage/CounterPage.module.css';
import { Link } from 'react-router-dom';

const CounterPage = () => {
  const { count, increment, decrement, reset, setValue } = useCounter();

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === '' || isNaN(value)) {
      setValue(0);
    }else {
      setValue(parseInt(value));
    }
  }

  return (
    <div className={styles.counterpage__container}>
      <h1 className={styles.counterpage__h1}>Counter</h1>
      <p className={styles.counterpage__p}>Current Count: {count}</p>
      <div className={styles.btn__container}>
        <button className={styles.counterpage__btn1} onClick={increment}>Increment</button>
        <button className={styles.counterpage__btn2} onClick={decrement}>Decrement</button>
        <button className={styles.counterpage__btn3} onClick={reset}>Reset</button>
      </div>
      <input placeholder="Enter a number" type="text" maxLength='15' onInput={handleChange} />
      <Link to="/" className="link">Back Home</Link>
    </div>
  );
};

export default CounterPage;