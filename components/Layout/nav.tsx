import Link from 'next/link';
import styles from './header.module.css';
import { useState } from 'react';
const Navigation = ({list, title,setTitle, subTitleRef})=>{
    const [active, setActive] = useState('main');
    const mouseOver = (id)=>{
        setTitle(id)        
    };
    return <nav>
                <ul className={styles.headerManuList}>
                    {list.map((list, index)=>{
                        return <li key={index} onMouseOver={()=>{mouseOver(list.id)}}>
                                    <Link href={list.subTitle[0].id ? `/${list.id}/${list.subTitle[0].id}`:`/${list.id}`}
                                    >{list.title}</Link>
                            </li>
                    })}
                </ul>
            </nav>
};
export default Navigation;