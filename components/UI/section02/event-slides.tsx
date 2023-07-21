import { useState,useEffect } from "react";
import Image from "next/image";
import styles from './event-slides.module.css';
const EventSlides = ({eventList, activeIdx, setActiveIdx})=>{
    const nextSlide = () => {
        setActiveIdx((prevIndex) => (prevIndex + 1) % eventList.length);
      };
    const intervalTime = 5000;
useEffect(() => {
// Start the slideshow
const timer = setInterval(nextSlide, intervalTime);

// Clean up the interval when the component unmounts
return () => clearInterval(timer);
}, [intervalTime]);
    return <div>
        <ul className={styles.eventSlidesContainer}>
            {eventList.map((slide, index) => (
                <li key={index} style={{ opacity: index === activeIdx ? '1' : '0' }}>
                    <Image src={slide.src} alt={slide.title} width={760} height={500}/>
                </li>
            ))}
        </ul>
    </div>
};
export default EventSlides;