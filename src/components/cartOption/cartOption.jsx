import Image from "next/image";
import styles from "./cartOption.module.css";

export default function CartOption() {
  return (
    <div className={styles.option}>
      <Image width={62} height={74} src={"/products/valorant.jpg"} />
      <div className={styles.info}>
        <h3 className={styles.title}>Dota 2</h3>
        <h3 className={styles.price}>R$ 99,99</h3>
        <p className={styles.remove}>Remover</p>
      </div>
    </div>
  );
}
