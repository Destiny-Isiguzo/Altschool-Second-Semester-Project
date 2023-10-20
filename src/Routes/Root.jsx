import { Link } from "react-router-dom";
import styles from '../Routes/Root.module.css';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorTest from "../components/ErrorTest";

function Root() {
  return (
    <>
      <ErrorBoundary fallback={<h1>Oops... an error occurred somewhere in the component</h1>}>
        <div className={styles.root__wrapper}>
          <h1 className={styles.root__h1}>Altschool Second  Semester Project </h1>
          <p className={styles.root__p1}>
            Try out the <Link to="/counterPage" className='link'>Counter App</Link>
          </p>
          {/* <ErrorTest /> */}
          <p className={styles.root__p2}>
            To see the 404 error page, click the link. It leads to a manually generated invalid path <Link to='/counterpages' className='link'>404 Error Page</Link>
          </p>
          <ErrorTest />
        </div>
      </ErrorBoundary>
    </>
  );
}

export default Root;
