import BasketCard from "../components/BasketCard";
import SideCheck from "../components/SideCheck";

import { useSelector } from "react-redux";


import styles from "../styles/CheckOut.module.css"

function CheckOut() {
 
  const selectedItems = useSelector(state=> state.cart.selectedItems);
  const counts = useSelector(state=> state.cart.counts);




  return (
    <div className={styles.container}>
        <SideCheck/>
      <div className={styles.cards}>
        {!counts && <span className={styles.noItem}>No item selected</span>}
        {selectedItems.map(item => <BasketCard key={item.id} data={item} />)}
      </div>
    </div>
  );
}

export default CheckOut;
