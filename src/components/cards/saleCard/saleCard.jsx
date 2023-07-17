import Image from "next/image";
import styles from "./saleCard.module.css";
import Button from "@/components/forms/button/button";
export default function SaleCard({ name, discount, fullPrice, discountPrice }) {
  return (
    <div className={styles.salecard}>
      <Image src={`/products/${name}`} alt={name} width={250} height={300} />
      <div className={styles.info}>
        <h3 className={styles.title}>Oferta exclusiva</h3>
        <div className={styles.pricecard}>
          <div className={styles.percent}>- {discount}</div>
          <div className={styles.price}>
            <p className={styles.fullprice}>R${fullPrice}</p>
            <h4 className={styles.discountprice}>R${discountPrice}</h4>
          </div>
        </div>
        <Button>Adicionar ao carrinho</Button>
      </div>
    </div>
  );
}

SaleCard.defaultProps = {
  name: "league-of-legends.jpg",
  discount: "20%",
  fullPrice: "99,99",
  discountPrice: "89,90",
};
