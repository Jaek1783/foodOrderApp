import Item from "./item";
import styles from './cart-items.module.css';
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const CartItem = ({items})=>{
    const priceSum = useSelector((state:RootState)=>state.cart.totalPriceSum);
    const valSum = useSelector((state:RootState)=>state.cart.totalValSum);
    const  totalPriceSum = priceSum.toLocaleString();
    const totalValSum = valSum.toLocaleString();
    return <div>
        <ul className={styles.itemContainer}>
            {items.map((item, index) =><Item item={item} key={index} id={index}/>)}
        </ul>
        <hr/>
        <div className={styles.all}>
            <p>전체</p>
            <p>수량 : {totalValSum} BOX</p>
            <p>{totalPriceSum}</p>
        </div>
    </div>
};
export default CartItem;