import Image from "next/image";
import styles from './item.module.css'
import Btn from "../../Layout/btn";
import { plusVal, minusVal,deleteItem } from "../../Redux/slise";
import { useDispatch } from "react-redux";
const Item = ({item, id})=>{
    const price = (item.price * item.val).toLocaleString();
    const dispatch = useDispatch();
    const increaseVal = ()=>{
        if(item.val !== 5){
            dispatch(plusVal(item))
        }
    };
    const decreaseVal = ()=>{
        if(item.val !== 1){
            dispatch(minusVal(item))
        }
    };
    const deleteButton = (id)=>{
        const addId = {...item, id};
        dispatch(deleteItem(addId));
        console.log(item)
    };
    return <li className={styles.itemBox}>
        <div className={styles.rightItem}>
            <Image src={`/manu/manu0${item.index}.png`} alt={`${item.title}이미지`} width={100} height={100}/>
            <p>{item.title}</p>
        </div>
        <div  className={styles.leftContainer}>
        <p>선택 사이즈 : {item.size}</p>
        <div className={styles.btnContainer}>
            <Btn><button onClick={increaseVal}>+</button></Btn>
                <span>{item.val}</span>
            <Btn><button onClick={decreaseVal}>-</button></Btn>
        </div>
        <p>{price}</p>
        <button onClick={()=>{deleteButton(id)}} className={styles.delBtn}>삭제</button>
        </div>
    </li>
};
export default Item;