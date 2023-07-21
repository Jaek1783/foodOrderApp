import styles from './event-description.module.css';
const EventDescription = ({eventList, activeIdx})=>{
    return <div className={styles.descBox}>
        {eventList.map((list, index)=> {
            return <dl key={index} 
                className={styles.descContainer} 
                style={{opacity:index === activeIdx ? '1' : '0' }}>
                <dt><pre>{list.desc}</pre></dt>
                <dd><pre>{list.span}</pre></dd>
                <dd className={styles.descBtn}><button>자세히보기</button></dd>
            </dl>
        })}
    </div>
};
export default EventDescription;