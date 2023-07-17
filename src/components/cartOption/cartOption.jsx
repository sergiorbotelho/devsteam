import Image from "next/image";
import styles from "./cartOption.module.css";

export default function CartOption({ name, image, fullPrice, onRemove }) {
  return (
    <div className={styles.option}>
      <Image
        className={styles.image}
        width={62}
        height={74}
        src={`/products/${image}`}
        alt={name}
      />
      <div className={styles.info}>
        <h3 className={styles.title}>{name}</h3>
        <h3 className={styles.price}>R$ {fullPrice.toFixed(2)}</h3>
        <p className={styles.remove} onClick={onRemove}>
          Remover
        </p>
      </div>
    </div>
  );
}
