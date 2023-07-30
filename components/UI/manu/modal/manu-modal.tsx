import Image from "next/image";
import styles from './manu-modal.module.css';
import AddManuButton from "../add-button";
import ChoiceSize from "./choice-size";
const ManuModal = ({index, modalRef,close, title, desc, Mprice, Lprice, choice, setChoice, total, inputRef})=>{
    return <div className={styles.modalContainer} ref={el => modalRef.current[index] = el}>
        <button onClick={()=>{close(index)}} className={styles.close}>close</button>
        <dl className={styles.layoutContainer}>
            <dt>
                    <div className={styles.btnContainer}>
                    <h1><Image src={index < 10 ? `/manu/manu0${index}.png`:`/manu/manu${index}.png`} alt={`메뉴 이미지 0${index}`} width={300} height={300}/></h1>
                        <AddManuButton index={index}inputRef={inputRef}/>
                    </div>
                    <ChoiceSize Mprice={Mprice} Lprice={Lprice} choice={choice} setChoice={setChoice} total={total} index={index} title={title} />
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