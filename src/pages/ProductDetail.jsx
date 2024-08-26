import { useParams } from "react-router-dom";
import { productDetails } from "../helpers/helpers";
import { Link } from "react-router-dom";


import { productQuantity } from "../helpers/helpers";
import { MdAddShoppingCart, MdDeleteOutline , MdLabel} from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";


import Loading from "../components/Loading";

import styles from "../styles/ProductDetail.module.css"
import { useDispatch, useSelector } from "react-redux";
import { addItem, decrease, increase, removeItem } from "../features/cart/cartSlice";

function ProductDetail() {

    const {id} = useParams()

    const selectedItems = useSelector(state=> state.cart.selectedItems)
    const quantity = productQuantity(selectedItems, id);
    const dispatch = useDispatch();

    const product = productDetails(+id);



    if(!product) return <Loading/>

    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <div className={styles.image}><img src={product.image} alt={product.title}/></div>
                <div className={styles.options}>
          {quantity == 1 && (
            <button onClick={() => dispatch(removeItem(product)) }>
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => dispatch(decrease(product)) }>-</button>
          )}
          {quantity > 0 && <span>{quantity}</span>}
          {quantity == 0 ? (
            <button className={styles.add}  onClick={() => dispatch(addItem(product)) }>
                Add to Cart
              <MdAddShoppingCart />
            </button>
          ) : (
            <button onClick={() => dispatch(increase(product)) }>+</button>
          )}
        </div>
            </div>
            <div className={styles.rightSide}>
                <div>
                <h3>{product.title}</h3>
                <span><MdLabel /> {product.category}</span>
                <p>{product.description}</p>
                </div>
                <div className={styles.bottom}>
                    <span><IoPricetagOutline />
                    {product.price}$</span>
                    <button>
                        <Link to="/products">
                        Back to shop
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;