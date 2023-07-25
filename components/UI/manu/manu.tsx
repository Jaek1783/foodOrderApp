import Image from 'next/image';
import styles from './manu.module.css';
import Link from 'next/link';
import { useContext } from 'react';
import MyContext from '../../../store/context';
const Manu = ({children, slug})=>{
    const data = useContext(MyContext);
    const filterData = data.filter(list => list.id === 'manu')[0].subTitle;
    return <section className={styles.manuBox}>
        <h1 className={styles.title}>메뉴</h1>
        <ul className={styles.subManuBar}>
            {filterData.map((item,index) =>{
                return<li key={index} className={slug === item.id ? styles.active:styles.nonActive}>
                    <Link href={item.id}>{item.manu}</Link>
                </li>
            })}
        </ul>
        {children}
        </section>
};
export default Manu;