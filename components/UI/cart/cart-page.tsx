import Link from 'next/link';
import styles from './cart-page.module.css';
import NonCartItem from './non-cart-item';
const CartPage = ()=>{
    let cartItem ;
    return <div className={styles.cartContainer}>
        <h1>장바구니</h1>
        {cartItem ? '':<NonCartItem/>}
    </div>
};
export default CartPage;