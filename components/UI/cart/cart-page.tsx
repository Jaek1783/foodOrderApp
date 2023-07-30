import Link from 'next/link';
import styles from './cart-page.module.css';
import NonCartItem from './non-cart-item';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import CartItem from './cart-items';
const CartPage = ()=>{
    const cartItem = useSelector((state:RootState)=>state.cart.cartItems);

    return <div className={styles.cartContainer}>
        <h1>장바구니</h1>
        {cartItem.length === 0 ? <NonCartItem/>:<CartItem items={cartItem}/>}
    </div>
};
export default CartPage;