import { useSelector } from 'react-redux';
import styles from './choice-size.module.css';
import { RootState } from '../../../../store/store';
const ChoiceSize = ({Mprice, Lprice, choice, setChoice, total, index, title, size})=>{
    const cartItems = useSelector((state:RootState)=>state.cart.cartItems);
    const changeChoiceHandler=()=>{
        setChoice(choice => !choice);
    };
    const checkArr = (cartItems, index,size, title)=>{
        const findIndex = cartItems.findIndex(item => item.index === index);
        const findSize = cartItems.findIndex(item => item.size === size );
        if(findIndex === -1){
            total(index, title)
            alert('장바구니에 담겼습니다')
        }
        if (findIndex === 0){
            if(findSize === -1){
                total(index, title)
                alert('장바구니에 담겼습니다')
            }
            alert('상품이 장바구니에 존재합니다')
        }
    };
    return <div className={styles.choiceContainer}>
        {Lprice ?    <button className={choice ? styles.priceBtn+ ` ` + styles.choice:styles.priceBtn} onClick={()=>{changeChoiceHandler()}}>
                        <span className={styles.priceIcon}>L</span>
                        <span>{Lprice.toLocaleString()}</span>
                     </button>:''}
        {Mprice ?  <button className={choice === false  ? styles.priceBtn+ ` ` + styles.choice:styles.priceBtn} onClick={()=>{changeChoiceHandler()}}>
                        <span className={styles.priceIcon}>M</span>
                        <span>{Mprice.toLocaleString()}</span>
                   </button> : '' }
            <button className={styles.addCart} onClick={()=>{checkArr(cartItems, index, size, title)}}>장바구니 담기</button>
    </div>
};
export default ChoiceSize;