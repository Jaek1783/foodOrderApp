import { useEffect } from 'react';
import styles from './sub-title.module.css';
import Link from 'next/link';
const SubTitle = ({list, title,setTitle, subTitleRef})=>{
    const filterData = list.filter(sub => sub.id === title);
    const handleMouseLeave = ()=>{
        setTitle('e-coupon')
    };
    return <div className={styles.subTitleContainer} ref={subTitleRef} onMouseLeave={()=>{handleMouseLeave()}} style={{display : title === 'e-coupon' ? 'none': 'block'}}>
        {filterData.map((l)=>{
            return <ul key={l.id} className={styles.subTitleTextContainer +` ${l.id}`}>
                {l.subTitle.map((item,index)=>{
                    if(item.manu){
                        return <li key={index} ><Link href={`/${l.id}/${item.id}`}>{item.manu}</Link></li>
                    } 
                })}
            </ul>
        })}
    </div>
};

export default SubTitle;