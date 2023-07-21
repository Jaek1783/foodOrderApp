import { useRef,useEffect } from 'react';
import styles from './event-loop.module.css';
import Image from 'next/image';
const EventLoop = ({eventList, activeIdx, setActiveIdx})=>{
    const loopRef = useRef(null);

    useEffect(()=>{
        console.log(activeIdx, eventList.length-2)
        if(activeIdx !== eventList.length-1){
            loopRef.current.style.top=- (activeIdx*175) +'px';
            loopRef.current.style.transition = "all .4s ease-in-out";
        }
        if(activeIdx === eventList.length-2){
            loopRef.current.style.top= - 175 +'px';
            loopRef.current.style.transition = "none";
            setTimeout(()=>{
                setActiveIdx(2)
            },300);
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
        </div>
    </div>
};
export default EventLoop;