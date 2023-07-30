import styles from './btn.module.css';
const Btn = ({children})=>{
    return <div className={styles.button}>{children}</div>
};
export default Btn;