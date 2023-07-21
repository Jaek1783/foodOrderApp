import styles from './section02.module.css';
import EventSlides from './event-slides';
import EventDescription from './event-description';
import EventLoop from './event-loop';
import { useState } from 'react';
interface eventListType {
    id:string,
    title,
    src:string,
    desc:string,
    span:string

}
const Section02 = ()=>{
    const eventList:eventListType[] = [
        {id : 'e3', title:'event03', src:'/assets/event03.png', desc:'피자헛 제휴할인\n모아보기', span:'통신사, 카드사 할인 및\n적립 안내'},
        {id : 'e4', title:'event04', src:'/assets/event04.png', desc:'피자헛 창업안내&\n문의', span:'피자헛 가맹점주님을\n모십니다.'},
        {id : 'e1', title:'event01', src:'/assets/event01.png', desc:'모바일상품권 \n선물하기', span:'피자로 마음을\n선물하세요'},
        {id : 'e2', title:'event02', src:'/assets/event02.png', desc:'회원가입 혜택 \n알아보기', span:'회원 가입 즉시 100%\n쿠폰 지급'},
        {id : 'e3', title:'event03', src:'/assets/event03.png', desc:'피자헛 제휴할인 \n모아보기', span:'통신사, 카드사 할인 및\n적립 안내'},
        {id : 'e4', title:'event04', src:'/assets/event04.png', desc:'피자헛 창업안내&\n문의', span:'피자헛 가맹점주님을\n모십니다.'},
        {id : 'e1', title:'event01', src:'/assets/event01.png', desc:'모바일상품권\n선물하기', span:'피자로 마음을\n선물하세요'},
        {id : 'e2', title:'event02', src:'/assets/event02.png', desc:'회원가입 혜택\n알아보기', span:'회원 가입 즉시 100%\n쿠폰 지급'},
    ];
    const [activeIdx, setActiveIdx] = useState<number>(2);
    return <section className={styles.section02}>
        <EventDescription eventList={eventList} activeIdx={activeIdx}/>
        <EventSlides eventList={eventList} activeIdx={activeIdx} setActiveIdx={setActiveIdx}/>
        <EventLoop eventList={eventList} activeIdx={activeIdx} setActiveIdx = {setActiveIdx}/>
    </section>
};
export default Section02;