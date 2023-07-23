import { useRef,useEffect } from 'react';
import styles from './event-loop.module.css';
import Image from 'next/image';
const EventLoop = ({eventList, activeIdx, setActiveIdx})=>{
    const loopRef = useRef(null);
    const btnUp = ()=>{
        if(activeIdx > 1){
            setActiveIdx(activeIdx => activeIdx -= 1)
        }
        if(activeIdx === 2){
            loopRef.current.style.transition = "none";
            
            setTimeout(()=>{
                loopRef.current.style.top= - 875 +'px';
                setActiveIdx(activeIdx => activeIdx = 5)
            },500);}
    };
    const btnDown = ()=>{
        if(activeIdx < 6){
            setActiveIdx(activeIdx => activeIdx += 1)
        }
        
    };
console.log(activeIdx)
    useEffect(()=>{
        if(activeIdx !== eventList.length-1){
            loopRef.current.style.top=- (activeIdx*175) +'px';
            loopRef.current.style.transition = "all .5s ease-in-out";
        }
        if(activeIdx === eventList.length-2){
            loopRef.current.style.top= - 175 +'px';
            loopRef.current.style.transition = "none";
            setTimeout(()=>{
                setActiveIdx(2)
            },300);
        }
        if(activeIdx === 1){
            setTimeout(()=>{
                loopRef.current.style.transition = "none";
            },300)
            
        }
    },[activeIdx]);
    return <div className={styles.loopBox}>
        <div className={styles.loopContainer}>
            <ul className={styles.loopSlides} ref={loopRef}>
                {eventList.map((list,index)=>{
                    return <li key={index}>
                        <Image src={list.src} alt={list.title} width={240} height={150}/>
                    </li>
                })}
            </ul>
            <div className={styles.pageBtnBox}>
                <ul className={styles.pageContainer}>
                    {eventList.map((list,index )=> {
                        return <li key={index} className={activeIdx === index? styles.page + ` ${styles.pageActive}`: styles.page}>{list.length}</li>
                    })}
                </ul>
                <div className={styles.pageBtnContainer}>
                    <div className={styles.pageBtn} onClick={btnUp}>
                        <button><Image src={'/icon/up.png'} alt='위 화살표' width={15} height={15}/></button>
                    </div>
                    <div className={styles.pageBtn} onClick={btnDown}>
                        <button><Image src={'/icon/down.png'} alt='위 화살표' width={15} height={15}/></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
};
export default EventLoop;