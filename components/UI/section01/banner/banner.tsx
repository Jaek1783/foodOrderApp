import styles from './banner.module.css';
import Image from 'next/image';
interface bannerListType {
    id : string,
    title : string,
    src : string
}
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
                    <span><Image src={item.src} alt={`${item.title}이미지`} width={50} height={60}/></span>
                    <p>{item.title}</p>
                </li>
            })}
        </ul>
    </div>
};
export default Banner;