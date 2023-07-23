import Image from 'next/image';
import styles from './manu.module.css';

const Manu = ({manu})=>{
    return <section className={styles.manuBox}>
        <h1 className={styles.title}>메뉴</h1>
        <ul className={styles.manuContainer}>
            {manu.map(list => {
                return <li key={list.id}>
                    <Image src={list.src} alt={list.title} width={250} height={250}/>
                    <dl>
                        <dt>{list.title}</dt>
                        <dd>
                            <span>{list.Mprice}</span>
                            <span>{list.Lprice}</span>
                        </dd>
                        <dd>{list.desc}</dd>
                    </dl>
                </li>
            })}
        </ul>
    </section>
};
export default Manu;