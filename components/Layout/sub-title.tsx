import styles from './sub-title.module.css';
import Link from 'next/link';
const SubTitle = ({list, title,setTitle,subTitleRef})=>{
    const mouseLeave = ()=>{
        setTitle('main')
    };
    return <div 
    className={styles.subTitleContainer + ` ${title}`} 
    ref={subTitleRef} 
    onMouseLeave={mouseLeave}
    >
        {list.map((l)=>{
            if(title === l.id){
                return <ul key={l.id} className={styles.subTitleTextContainer +` ${l.id}`}>
                {l.subTitle.map((item,index)=>{
                    if(item.manu){
                        return <li key={index} ><Link href={item.id ? `/${l.id}/${item.id}`:`/${l.id}`}>{item.manu}</Link></li>
                    } 
                })}
            </ul>   
            }
        })}
    </div>
};

export default SubTitle;