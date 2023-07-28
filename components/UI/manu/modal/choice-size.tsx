import styles from './choice-size.module.css';
const ChoiceSize = ({Mprice, Lprice, choice, setChoice, total, index})=>{
    const changeChoiceHandler=()=>{
        setChoice(choice => !choice);
    };
    return <div className={styles.choiceContainer}>
                    <button className={choice ? styles.priceBtn+ ` ` + styles.choice:styles.priceBtn} onClick={()=>{changeChoiceHandler()}}>
                <span className={styles.priceIcon}>L</span>
                <span>{Lprice}</span>
            </button>
        {Mprice ?  <button className={choice === false  ? styles.priceBtn+ ` ` + styles.choice:styles.priceBtn} onClick={()=>{changeChoiceHandler()}}>
                        <span className={styles.priceIcon}>M</span>
                        <span>{Mprice}</span>
                   </button> : '' }
            <button className={styles.addCart} onClick={()=>{total(index)}}>주문하기</button>
    </div>
};
export default ChoiceSize;