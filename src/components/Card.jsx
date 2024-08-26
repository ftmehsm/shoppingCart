import styles from "../styles/Card.module.css";
import { productQuantity, shortenName } from "../helpers/helpers";
import { Link } from "react-router-dom";

import { MdAddShoppingCart, MdDeleteOutline } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decrease, increase, removeItem } from "../features/cart/cartSlice";


function Card({ data }) {
  const { id, title, image, price } = data;

 const selectedItems = useSelector(state => state.cart.selectedItems)

  const quantity = productQuantity(selectedItems, id);

  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h4>{shortenName(title)}</h4>
      <p>{price}$</p>
      <div className={styles.options}>
        <div>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        </div>
        <div>
          {quantity == 1 && (
            <button onClick={() => dispatch(removeItem(data)) }>
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => dispatch(decrease(data)) }>-</button>
          )}
          {quantity > 0 && <span>{quantity}</span>}
          {quantity == 0 ? (
            <button onClick={() => dispatch(addItem(data)) }>
              <MdAddShoppingCart />
            </button>
          ) : (
            <button onClick={() =>dispatch(increase(data)) }>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
