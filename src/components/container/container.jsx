import styles from "./container.module.css";

export default function Container({ children }) {
  return <h2 className={styles.container}>{children}</h2>;
}
