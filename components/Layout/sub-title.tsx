import { useEffect } from 'react';
import styles from './sub-title.module.css';
import Link from 'next/link';
const SubTitle = ({list, title,setTitle, subTitleRef})=>{
    const filterData = list.filter(sub => sub.id === title);
    const handleMouseLeave = ()=>{
        setTitle('m2')
    };
    return <div className={styles.subTitleContainer} ref={subTitleRef} onMouseLeave={()=>{handleMouseLeave()}} style={{display : title === 'm2' ? 'none': 'block'}}>
        {filterData.map((l)=>{
            return <ul key={l.id} className={styles.subTitleTextContainer + ` ${l.id}`}>
                {l.subTitle.map((item,index)=>{
                    if(item.manu){
                        return <li key={index} ><Link href={'#'}>{item.manu}</Link></li>
                    } 
                })}
            </ul>
        })}
    </div>
};

export default SubTitle;