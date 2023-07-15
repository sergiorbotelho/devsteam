import styles from "./button.module.css";
export default function Button({ children }) {
  return (
    <div>
      <button className={styles.button}>{children}</button>
    </div>
  );
}
