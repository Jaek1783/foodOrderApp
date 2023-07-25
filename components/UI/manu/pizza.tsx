import styles from './manu.module.css';
import Image from 'next/image';
const PizzaPage = ({manu})=>{
    return <>
                <p><Image src={'/manu/manuAdd.jpeg'} alt='광고 배너 이미지' width={1350} height={140}/></p>
                    <ul className={styles.manuContainer}>
                        {manu.map(list => {
                            return <li key={list.id}>
                                <span><Image src={list.src} alt={list.title} width={250} height={250}/></span>
                                <dl>
                                    <dt>{list.title}</dt>
                                    <dd>
                                    {list.Mprice ? <span><span className={styles.priceIcon}>M</span>{list.Mprice}</span> : ''}
                                    {list.Lprice ? <span><span className={styles.priceIcon}>L</span>{list.Lprice}</span> : ''}
                                    </dd>
                                    <dd>{list.desc}</dd>
                                </dl>
                            </li>
                        })}
                    </ul>
            </>
};
export default PizzaPage;