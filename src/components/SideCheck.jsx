import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/SideCheck.module.css";

import { AiOutlineDollarCircle } from "react-icons/ai";
import {check_Out} from "../features/cart/cartSlice"



function SideCheck() {
   

   const details = ()=>{
    const total = useSelector(state => state.cart.total);
    const counts = useSelector(state => state.cart.counts);
    const checkOut = useSelector(state => state.cart.checkOut);
    return {total,counts,checkOut}
   }

   const {total,counts,checkOut} = details();


   console.log(checkOut);

   const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <span><AiOutlineDollarCircle /> {counts}</span> 
           <span><AiOutlineDollarCircle /> {total}</span> 
           { checkOut ? null  : <span><AiOutlineDollarCircle />pending...</span> }
           <button onClick={() => dispatch(check_Out())}>Pay</button>
        </div>
    );
}

export default SideCheck;