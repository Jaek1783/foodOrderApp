import styles from './section02.module.css';
import EventSlides from './event-slides';
interface eventListType {
    id:string,
    title,
    src:string,
    desc:string,
    span:string

}
const Section02 = ()=>{
    const eventList:eventListType[] = [
        {id : 'e1', title:'event01', src:'/assets/event01.png', desc:'모바일상품권 선물하기', span:'피자로 마음을 선물하세요'},
        {id : 'e2', title:'event02', src:'/assets/event02.png', desc:'회원가입 혜택 알아보기', span:'회원 가입 즉시 100% 쿠폰 지급'},
        {id : 'e3', title:'event03', src:'/assets/event03.png', desc:'피자헛 제휴할인 모아보기', span:'통신사, 카드사 할인 및 적립 안내'},
        {id : 'e4', title:'event04', src:'/assets/event04.png', desc:'피자헛 창업안내&문의', span:'피자헛 가맹점주님을 모십니다.'},
    ];
    return <section className={styles.section02}>
        <EventSlides eventList={eventList}/>
    </section>
};
export default Section02;