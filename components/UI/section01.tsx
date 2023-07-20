import Slide from "../UI/section01/slide/main-slide";
import Banner from "./section01/banner/banner";
import styles from './section01.module.css';
const Section01 = ()=>{
    return <section className={styles.section01}>
                <Slide/>
                <Banner/>
            </section>
};
export default Section01;