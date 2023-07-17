import styles from "./cartButton.module.css";
import { BsCart4 } from "react-icons/bs";
import CartMenu from "@/components/cartMenu/cartMenu";
import { useState } from "react";
export default function CartButton() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <BsCart4
        className={styles.icon}
        size={40}
        onClick={() => setShowMenu(!showMenu)}
      />
      {showMenu && <CartMenu />}
    </div>
  );
}
