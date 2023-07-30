import Item from "./item";
import styles from './cart-items.module.css';
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const CartItem = ({items})=>{
    const data = useSelector((state:RootState)=>state.cart.totalValSum);
    const all = data.toLocaleString();
    return <div>
        <ul className={styles.itemContainer}>
            {items.map((item, index) =><Item item={item} key={index}/>)}
        </ul>
        <hr/>
        <div className={styles.all}>
            <p>합계</p>
            <p>{all}</p>
        </div>
    </div>
};
export default CartItem;