import styles from './main-slide.module.css'
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';
interface slidesListType {
    id:string,
    src : string,
    alt : string
}
const Slide = ()=>{
    const slidesList:slidesListType[] = [
        {id:'i4', src:'/assets/main04.jpeg',alt:'광고이미지04'},
        {id:'i1', src:'/assets/main.png',alt:'광고이미지01'},
        {id:'i2', src:'/assets/main02.png',alt:'광고이미지02'},
        {id:'i3', src:'/assets/main03.png',alt:'광고이미지03'},
        {id:'i4', src:'/assets/main04.jpeg',alt:'광고이미지04'},
        {id:'i1', src:'/assets/main.png',alt:'광고이미지01'},
    ]
    const [activeIdx, setActiveIdx] = useState(0);
    const indexRef = useRef(0);
    const slidesRef = useRef(null);
    const nextSlide = () => {
        setActiveIdx(indexRef.current += 1);
      };
    const intervalTime = 2000;
useEffect(()=>{
    const timer = setInterval(nextSlide,intervalTime);
    return ()=>clearInterval(timer);
},[intervalTime]);

useEffect(()=>{
    if(indexRef.current !== slidesList.length){
        slidesRef.current.style.left=-activeIdx*100+'%';
        slidesRef.current.style.transition = "all .3s ease-in-out";
    }
    if(indexRef.current === slidesList.length){
        slidesRef.current.style.transition = "none";
        slidesRef.current.style.left= -100+'%';
        setTimeout(()=>{
            setActiveIdx(indexRef.current = 1);
        },300);
    }
},[activeIdx]);

const nextBtnClickHandler = (e)=>{
    e.preventDefault();
    if(indexRef.current !== slidesList.length){
        setActiveIdx(indexRef.current += 1);
        slidesRef.current.style.left=-activeIdx*100+'%';
        slidesRef.current.style.transition = "all .3s ease-in-out";
    }
    if(indexRef.current === slidesList.length){
        slidesRef.current.style.transition = "none";
        slidesRef.current.style.left= -100+'%';
        setTimeout(()=>{
            setActiveIdx(indexRef.current = 1);
        },300);
    }
}
const prevBtnClickHandler = (e)=>{
    e.preventDefault();
    if(indexRef.current !== slidesList.length){
        setActiveIdx(indexRef.current -= 1);
        slidesRef.current.style.left=activeIdx*100+'%';
        slidesRef.current.style.transition = "all .s ease-in-out";
    }
    if(indexRef.current === 0){
        slidesRef.current.style.transition = "none";
        slidesRef.current.style.left= -500+'%';
        setTimeout(()=>{
            setActiveIdx(indexRef.current = 5);
        },300);
    }
}
    return <div className={styles.slidesContainer}>
            <ul ref={slidesRef}>
                {slidesList.map((list, index)=>{
                    return <li
                                key={index}
                                style={{
                                background: `no-repeat 0 0 url(${list.src})`,
                                backgroundSize:`cover`,
                                }}
                            >
                        </li>
                })}
            </ul>
            <div className={styles.arrowBtn}>
                <button className={styles.left} onClick={prevBtnClickHandler}><Image src={'/icon/left.png'} alt='화살표' width={60} height={60}/></button>
                <button className={styles.right} onClick={nextBtnClickHandler}><Image src={'/icon/right.png'} alt='화살표' width={60} height={60}/></button>
                <span>{indexRef.current === 0 ?  4 : indexRef.current > 4 ? 1 : `${indexRef.current}`}{ ` / ${slidesList.length-2} `}</span>
            </div>
        </div>
};
export default Slide;