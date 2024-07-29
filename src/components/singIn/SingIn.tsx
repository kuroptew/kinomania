import styles from "./styles.module.scss";

interface Props {
  handleSingIn: () => void;
}

const SingIn = ({ handleSingIn }: Props) => {
  return (
    <button onClick={handleSingIn} className={styles.btn}>Войти</button>
  )
};

export default SingIn;