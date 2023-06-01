// Styles
import styles from '../styles/tag.module.css';

function Tag({ name }) {
  return <span className={styles.tag}>{name}</span>;
}
export default Tag;
