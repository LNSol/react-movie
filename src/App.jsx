import Button from './components/Button';
import styles from './App.module.css';

const App = () => {
  return (
    <div>
      <h1 className={styles.title}>Welcome Back!</h1>
      <Button text={'Continue'} />
    </div>
  );
};
export default App;
