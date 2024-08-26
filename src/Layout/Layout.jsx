import { Link } from "react-router-dom";

import styles from "../styles/Layout.module.css";

import { FiShoppingCart } from "react-icons/fi";

import { useSelector } from "react-redux";

function Layout({ children }) {
  const basket = useSelector(state=> state.cart.selectedItems);
  const counts = useSelector(state=> state.cart.counts);

  return (
    <>
      <header>
        <Link to="/products">SHOPPING</Link>
        <Link to="/checkout">
          <div>
            <FiShoppingCart />
            {!!counts && <span>{counts}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer>Made by ftmehsm</footer>
    </>
  );
}

export default Layout;
