import { useRecoilValue } from "recoil";
import { cartState } from "@/atoms/cartState";
import styles from "./cartButton.module.css";
import { BsCart4 } from "react-icons/bs";
import CartMenu from "@/components/cartMenu/cartMenu";
import { useState } from "react";
export default function CartButton() {
  const [showMenu, setShowMenu] = useState(false);
  const cart = useRecoilValue(cartState);

  return (
    <div className={styles.cartArea} onClick={() => setShowMenu(!showMenu)}>
      <BsCart4 className={styles.icon} size={40} />
      {cart.length !== 0 && <div className={styles.count}>{cart.length}</div>}

      {showMenu && <CartMenu />}
    </div>
  );
}
