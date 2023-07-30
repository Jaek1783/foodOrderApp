import Link from 'next/link';
import styles from './cart-page.module.css';

const NonCartItem = ()=>{
    return <div className={styles.textContainer}>
                <p>장바구니가 비어 있습니다</p>
                <button><Link href={'/manu/pizza'}>피자핫 즐기러 가기</Link></button>
           </div>
};
export default NonCartItem;