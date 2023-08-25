import styles from './nav.module.css';
import SubManu from '../Layout/sub-manu';
import Link from 'next/link';
import { useRef } from 'react';
const Navigation = ({ManuList, SubList, title, setTitle})=>{
    const activeTitle = (id)=>{
        setTitle(id)
    }
    return  <nav className={styles.navContainer}>
                <ul>
                    {ManuList.map((manuItem, manuIndex)=>{
                    return <li key={manuIndex} 
                               onMouseOver={()=>{activeTitle(manuItem.id)}}>
                                <Link href={`/`}
                                className={title === manuItem.id ? `${styles.active}`:null}
                                >{manuItem.title}</Link>
                           </li>
                    })}
                </ul>
                <div className={styles.subManuContainerBox}>
                    <SubManu
                        ManuList ={ManuList}
                        SubList={SubList}
                        title={title}
                    />
                </div>
            </nav>
};
export default Navigation;