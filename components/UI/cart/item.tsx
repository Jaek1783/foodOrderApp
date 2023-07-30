import Image from "next/image";
import styles from './item.module.css'
import Btn from "../../Layout/btn";

const Item = ({item})=>{
    const all = (item.price * item.val).toLocaleString();
    return <li className={styles.itemBox}>
        <div className={styles.rightItem}>
            <Image src={`/manu/manu0${item.index}.png`} alt={`${item.title}이미지`} width={100} height={100}/>
            <p>{item.title}</p>
        </div>
        <div  className={styles.leftContainer}>
        <p>선택 사이즈 : {item.size}</p>
        <Btn><button>+</button></Btn>
            <span>{item.val}</span>
        <Btn><button>-</button></Btn>
        <p>{all}</p>
        </div>
    </li>
};
export default Item;