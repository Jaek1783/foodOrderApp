import Link from 'next/link';
import styles from './header.module.css';
import { useState } from 'react';
const Navigation = ({list, title,setTitle,header,activeManu, setActiveManu})=>{

    const mouseOver = (id)=>{
        setTitle(id)
        header.current.style.height=200 + 'px';
    };
    const manuClick = (id)=>{
        setActiveManu(id)
    };

    return <nav className={styles.nav}>
                <ul className={styles.headerManuList}>
                    {list.map((item, index)=>{
                        return <li key={index} 
                                    onMouseOver={()=>{mouseOver(item.id)}} 
                                    onClick={()=>{manuClick(item.id)}} 
                                    className={styles.subManu}>
                                    <Link href={item.subTitle[0].id ? `/${item.id}/${item.subTitle[0].id}`:`/${item.id}`}
                                          className={item.id === activeManu ? styles.active:''}>
                                        {item.title}
                                    </Link>
                                    {title === item.id ? 
                                    <ul>
                                    {item.subTitle.map((i,index) => {
                                        return <li key={index}>
                                            <Link href={i.id === null ? `/${item.id}`:`/${item.id}/${i.id}`} 
                                                    className={styles.subLink}>
                                                {i.manu}
                                            </Link>
                                            </li>
                                    })}
                                    </ul>:''}
                                </li>
                    })}
                </ul>
            </nav>
};
export default Navigation;