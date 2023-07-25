import Image from 'next/image';
import styles from './manu.module.css';
import Link from 'next/link';
const Manu = ({children})=>{
    return <section className={styles.manuBox}>
        <h1 className={styles.title}>메뉴</h1>
        <ul className={styles.subManuBar}>
            <li><Link href='pizza'>피자</Link></li>
            <li><Link href='mybox'>{`마이박스(1인메뉴)`}</Link></li>
            <li><Link href='set'>세트</Link></li>
            <li><Link href='pasta-and-chiken'>파스타&치킨</Link></li>
            <li><Link href='side-and-drink'>사이드&음료</Link></li>
        </ul>
        {children}
        </section>
};
export default Manu;