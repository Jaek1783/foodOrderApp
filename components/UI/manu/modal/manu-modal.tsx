import Image from "next/image";
import styles from './manu-modal.module.css';
import AddManuButton from "../add-button";
import ChoiceSize from "./choice-size";
import { useState } from "react";
import { StateType , addCart} from "../../../Redux/slise";
import { useDispatch} from "react-redux";
const ManuModal = ({index, 
                    modalRef, 
                    title, 
                    desc, 
                    Mprice, 
                    Lprice, 
                    choice, 
                    setChoice
                })=>{

    const dispatch = useDispatch();
    const [value, setValue] = useState<number>(0);
    const size = choice ? 'L':'M' ;
    const close = (index)=>{
        modalRef.current[index].style.display='none';
    };

    const total = (index,title,id)=>{
        const val = value;

        const price = choice ? Lprice : Mprice;
        if(val === 0){
            alert('수량을 확인해 주세요')
        }
        if(val !== 0){
            const load : StateType = { val, size, title, index, price};
            dispatch(addCart(load));
            modalRef.current[index].style.display='none';
        }
        setValue(0)
        setChoice(true);
    };
    return <div className={styles.modalContainer} ref={el => modalRef.current[index] = el}>
        <button onClick={()=>{close(index)}} className={styles.close}>close</button>
        <dl className={styles.layoutContainer}>
            <dt>
                    <div className={styles.btnContainer}>
                    <h1><Image src={index < 10 ? `/manu/pizza/manu0${index}.png`:`/manu/manu${index}.png`} alt={`메뉴 이미지 0${index}`} width={300} height={300}/></h1>
                        <AddManuButton 
                            index={index} 
                            value={value} 
                            setValue={setValue}
                        />
                    </div>
                    <ChoiceSize 
                        Mprice={Mprice} 
                        Lprice={Lprice} 
                        choice={choice} 
                        setChoice={setChoice} 
                        total={total} 
                        index={index} 
                        title={title}
                        size={size}
                    />
            </dt>
        </dl>
        <dd>
            <dl className={styles.desc}>
                <dt>{title}</dt>
                <dd><pre>{desc}</pre></dd>
                <dd>* 오리지널 도우: 크런치 라이스가 도우의 수분을 지켜줘 더욱 쫄깃! 바삭, 고소한 맛까지</dd>
            </dl>
        </dd>
    </div>
};
export default ManuModal;