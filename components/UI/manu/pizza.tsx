import { useRef, useState } from 'react';
import Input from './input';
import styles from './manu.module.css';
import Image from 'next/image';
import ManuModal from './modal/manu-modal';
const PizzaPage = ({manu})=>{
    const modalRef = useRef([]);
    const inputRef= useRef([])
    const [choice, setChoice]=useState<boolean>(true);
    const modalHandler = (index,list)=>{
        modalRef.current[index].style.display='block';
    };
    const close = (index)=>{
        modalRef.current[index].style.display='none';
        inputRef.current[index].value = 0;
    };
    const total = (index,title)=>{
        const val = parseInt(inputRef.current[index].value);
        const manu = choice ? 'L':'M' ;
        console.log(val, manu, title)
        if(parseInt(inputRef.current[index].value) === 0){
            alert('수량을 확인해 주세요')
        }
        inputRef.current[index].value = 0;
        setChoice(true);
    };
    return <>
                <p><Image src={'/manu/manuAdd.jpeg'} alt='광고 배너 이미지' width={1350} height={140} priority/></p>
                    <ul className={styles.manuContainer}>
                        {manu.map((list,index) => {
                            return <li key={list.id} onClick={()=>{modalHandler(index,list)}}>
                                <span><Image src={index <10 ? `/manu/manu0${index}.png`:`/manu/manu${index}.png`} alt={list.title} width={250} height={250}/></span>
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
                    {manu.map((list,index)=><ManuModal 
                                                key={index} 
                                                index={index} 
                                                modalRef={modalRef} 
                                                close={close} 
                                                title={list.title}
                                                desc={list.modal}
                                                Mprice={list.Mprice}
                                                Lprice={list.Lprice}
                                                choice={choice}
                                                setChoice={setChoice}
                                                total={total}
                                                inputRef={inputRef}
                                                />)}
            </>
};
export default PizzaPage;