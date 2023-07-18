import { useRecoilState } from "recoil";
import { cartState } from "@/atoms/cartState";
import CartOption from "../cartOption/cartOption";
import styles from "./cartMenu.module.css";

export default function CartMenu() {
  const [cart, setCart] = useRecoilState(cartState);

  function handleRemoveProduct(pos) {
    setCart(cart.filter((obj, posObj) => posObj !== pos));
  }
  return (
    <div className={styles.menu}>
      <div className={styles.cartOption}>
        {cart.length === 0 && <p>Nenhum produto no seu carrinho</p>}
        {cart.map((cartInfo, pos) => (
          <CartOption
            name={cartInfo.name}
            image={cartInfo.image}
            fullPrice={cartInfo.fullPrice}
            onRemove={() => handleRemoveProduct(pos)}
            key={pos}
          />
        ))}
      </div>
      <div className={styles.priceline}>
        <h2>Total</h2>
        <h2 className={styles.price}>
          R${" "}
          {cart
            .reduce((prev, current) => prev + current.fullPrice, 0)
            .toFixed(2)}
        </h2>
      </div>
    </div>
  );
}
