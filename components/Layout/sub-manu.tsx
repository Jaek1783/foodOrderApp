import Link from 'next/link';
import styles from './sub-manu.module.css';

const SubManu = ({SubList, title, setActivePage})=>{

    return <div className={styles.subManuContainer}>
        <div className={styles.inner}>
            {SubList.map((subItem, subIndex)=>{
                return <ul key={subIndex} style={{display:`${subItem.id === title ? 'block':'none'}`}}>
                    {subItem.sub.map((item, index)=>{
                       return item.manu ?
                         <li key={index}>
                            <Link href={`/${subItem.id}/${item.id}`} onClick={()=>{setActivePage(subItem.id)}}>{item.manu}</Link>
                        </li> : null
                    })}
                </ul>
            })}
        </div>
    </div>
};
export default SubManu;