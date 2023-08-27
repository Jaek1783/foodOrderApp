import styles from './banner.module.css';
import Image from 'next/image';
import LoginContainer from "./login";
import { bannerListType } from '../../../../utill/types';
const Banner = ()=>{
    const bannerList : bannerListType [] = [
        {id : 'b1', title : '배달주문', src : '/icon/delivery.png'},
        {id : 'b2', title : '포장주문', src : '/icon/pizza.png'},
        {id : 'b3', title : '마이오더', src : '/icon/order.png'},
    ]
    return <div className={styles.bannerBox}>
        <ul className={styles.bannerContainer}>
            {bannerList.map(item => {
                return <li key={item.id} className={styles.bannerItem}>
                    <span><Image src={item.src} alt={`${item.title}이미지`} width={60} height={60}/></span>
                    <p>{item.title}</p>
                </li>
            })}
        </ul>
        <LoginContainer/>
    </div>
};
export default Banner;