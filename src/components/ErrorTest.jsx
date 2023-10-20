import { useState } from "react";
import styles from '../components/ErrorTest.module.css';

function ErrorTest() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error('Oops... an error occurred somewhere in the component');
  }
  return (
    <div>
      <p className={styles.errortest__p}>Test the Error Boundary by clicking the button</p>
      <button className={styles.errortest__btn} onClick={() => setHasError(true)}>Test errorboundary</button>
    </div>
  );
}

export default ErrorTest;