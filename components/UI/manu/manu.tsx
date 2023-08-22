import Image from 'next/image';
import styles from './manu.module.css';
import Link from 'next/link';
const Manu = ({children, slug})=>{
    return <section className={styles.manuBox}>
        <h1 className={styles.title}>메뉴</h1>
        <ul className={styles.subManuBar}>
            <li>피자</li>
            <li>마이박스(1인 메뉴)</li>
            <li>세트</li>
            <li>파스타&치킨</li>
            <li>사이드& 음료</li>
        </ul>
        {children}
        </section>
};
export default Manu;