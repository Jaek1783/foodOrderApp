import { useEffect } from 'react';
import styles from './sub-title.module.css';
const SubTitle = ({list, title,setTitle, subTitleRef})=>{
    const filterData = list.filter(sub => sub.id === title);
    const handleMouseLeave = ()=>{
        setTitle('m2')
    };
    return <div className={styles.subTitleContainer} ref={subTitleRef} onMouseLeave={()=>{handleMouseLeave()}}>
        {title !== 'm2' ? filterData.map((l)=>{
            return <ul key={l.id} className={styles.subTitleTextContainer}>
                {l.subTitle.map((item,index)=>{
                    if(item.manu){
                        return <li key={index}>{item.manu}</li>
                    } 
                })}
            </ul>
        }):''}
    </div>
};

export default SubTitle;