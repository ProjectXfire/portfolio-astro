import styles from '../styles/card.module.css';

function Card({ children }) {
  return <article className={styles.card}>{children}</article>;
}
export default Card;
