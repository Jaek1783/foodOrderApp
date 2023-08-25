import styles from './nav.module.css';
import SubManu from '../Layout/sub-manu';
import Link from 'next/link';
import { useState } from 'react';
const Navigation = ({ManuList, SubList, title, setTitle, activePage, setActivePage})=>{

    const activeTitle = (id)=>{
        setTitle(id)
    }
    const headerSubmanuHandler = ()=>{
        setTitle('main')
    }
    const clickPageActive = (id)=>{
        setActivePage(id)
    }
    return  <nav className={styles.navContainer} onMouseLeave={headerSubmanuHandler}>
                <ul>
                    {ManuList.map((manuItem, manuIndex)=>{
                        const filterManu = SubList.filter(item=> manuItem.id === item.id);
                    return <li key={manuIndex} 
                               onMouseOver={()=>{activeTitle(manuItem.id)}}>
                                <Link href={filterManu[0].sub[0].id === null ? `/${manuItem.id}`:`/${manuItem.id}/${filterManu[0].sub[0].id}`}
                                onClick={()=>{clickPageActive(manuItem.id)}}
                                className={title === manuItem.id ? `${styles.active}`: activePage === manuItem.id ? `${styles.active}`:null}
                                >{manuItem.title}</Link>
                           </li>
                    })}
                </ul>
                <div className={styles.subManuContainerBox}>
                    <SubManu
                        SubList={SubList}
                        title={title}
                        setActivePage={setActivePage}
                    />
                </div>
            </nav>
};
export default Navigation;