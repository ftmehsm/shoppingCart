import { shortenName } from "../helpers/helpers";
import {  MdDeleteOutline } from "react-icons/md";

import styles from "../styles/BasketCard.module.css"
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";


function BasketCard({data}) {

    const {image,title} = data;

    const dispatch = useDispatch()

    return (
        <>
        <div className={styles.container}>
            <img src={image} alt={title} />
            <p>{shortenName(title)}</p>
            <div className={styles.options}>
            {data.quantity == 1 && (
            <button onClick={() => dispatch(removeItem(data)) }>
              <MdDeleteOutline />
            </button>
          )}
          {data.quantity > 1 && (
            <button onClick={() => dispatch(decrease(data)) }>-</button>
          )}
          {data.quantity > 0 && <span>{data.quantity}</span>}
          <button onClick={() => dispatch(increase(data)) }>+</button>
            </div>
        </div>
        </>
    );
}

export default BasketCard;