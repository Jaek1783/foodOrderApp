import styles from './pizza.module.css';

import Image from 'next/image';
import ManuModal from './modal/manu-modal';

import { useRef, useState } from 'react';
const PizzaPage = ({manu})=>{
    const modalRef = useRef([]);
    const [choice, setChoice]=useState<boolean>(true);
    const modalHandler = (index)=>{
        modalRef.current[index].style.display='block';
    };
    return <>
                <p><Image src={'/manu/manuAdd.jpeg'} alt='광고 배너 이미지' width={1350} height={140} priority/></p>
                    <ul className={styles.manuContainer}>
                        {manu.map((list,index) => {
                            const mPrice = list.Mprice ?  list.Mprice.toLocaleString() : '';
                            const lPrice = list.Lprice ?  list.Lprice.toLocaleString() : '';

                            return <li key={index} onClick={()=>{modalHandler(index)}}>
                                <span><Image src={index <10 ? `/manu/manu0${index}.png`:`/manu/manu${index}.png`} alt={list.title} width={250} height={250}/></span>
                                <dl>
                                    <dt>{list.title}</dt>
                                    <dd>
                                    {list.Mprice ? <span><span className={styles.priceIcon}>M</span>{mPrice}</span> : ''}
                                    {list.Lprice ? <span><span className={styles.priceIcon}>L</span>{lPrice}</span> : ''}
                                    </dd>
                                    <dd>{list.desc}</dd>
                                </dl>
                            </li>
                        })}
                    </ul>
                    {manu.map((list,index)=><ManuModal 
                                                key={index} 
                                                index={index} 
                                                modalRef={modalRef} 
                                                title={list.title}
                                                desc={list.modal}
                                                Mprice={list.Mprice}
                                                Lprice={list.Lprice}
                                                choice={choice}
                                                setChoice={setChoice}
                                                />)}
            </>
};
export default PizzaPage;