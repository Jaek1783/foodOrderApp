import {useEffect,useRef } from "react";
import Image from "next/image";
import styles from './event-slides.module.css';
const EventSlides = ({eventList, activeIdx, setActiveIdx})=>{
    const slideRef = useRef(null);
    const nextSlide = () => {
        setActiveIdx((prevIndex) => (prevIndex + 1) % eventList.length);
      };
    const intervalTime = 5000;
useEffect(() => {
const timer = setInterval(nextSlide, intervalTime);

return () => clearInterval(timer);
}, [intervalTime]);
    return <div>
        <ul className={styles.eventSlidesContainer}>
            {eventList.map((slide, index) => (
                <li key={index} 
                style={{
                    opacity: index === activeIdx ? '1' : '0',
                    transition: activeIdx > 2 ? 'all ease-in-out .5s' : 'none'
                    }} ref={slideRef}>
                    <Image src={slide.src} alt={slide.title} width={760} height={500}/>
                </li>
            ))}
        </ul>
    </div>
};
export default EventSlides;