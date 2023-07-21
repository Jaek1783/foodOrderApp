import styles from "./section01.module.css";
import Slide from "./slide/main-slide";
import Banner from "./banner/banner";
const Section01 = ()=>{
    return <section className={styles.section01}>
                <Slide/>
                <Banner/>
            </section>
};
export default Section01;