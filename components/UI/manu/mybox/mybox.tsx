import ManuModal from "../modal/manu-modal";
import Image from "next/image";
import styles from './mybox.module.css'
const MyboxPage = ()=>{
    const mybox = [
        {title:'마르게리따', price:6900, desc:'#7.5인치 #1인피자 #바질페스토', modal:''},
        {title:'LA BBQ불고기', price:8900, desc:'#7.5인치 #1인피자 #미국 BBQ소스', modal:''},
        {title:'브루클린 버거', price:7900, desc:'#7.5인치 #1인피자 #미국식버거맛', modal:''},
        {title:'콤비네이션 1958', price:7900, desc:'#7.5인치 #1인피자 #오리지널리티', modal:''},
        {title:'알로하 하와이', price:7900, desc:'#7.5인치 #1인피자 #하와이안로컬피자', modal:''},
        {title:'순삭 크런치 포테이토', price:7900, desc:'#7.5인치 #1인피자 #벌집모양감자', modal:''},
        {title:'할라 페페로니 러버', price:7900, desc:'#7.5인치 #1인피자 #할라피뇨 #맵짠맵짠', modal:''},
        {title:'페페로니 러버', price:6900, desc:'#7.5인치 #1인피자 #페페로니한가득', modal:''},
    ];
    return <>
        <ul className={styles.manuContainer}>
            {mybox.map((list,index) => {
                const price = list.price ?  list.price.toLocaleString() : '';

                return <li key={index} onClick={()=>{}}>
                    <span><Image src={index <10 ? `/manu/mybox/mybox0${index+1}.png`:`/manu/manu${index}.png`} alt={list.title} width={250} height={250}/></span>
                    <dl>
                        <dt>{list.title}</dt>
                        <dd>
                        {list.price ? <span><span className={styles.priceIcon}>L</span>{price} ~ </span> : ''}
                        </dd>
                        <dd>{list.desc}</dd>
                    </dl>
                </li>
            })}
        </ul>
    </>
};
export default MyboxPage;