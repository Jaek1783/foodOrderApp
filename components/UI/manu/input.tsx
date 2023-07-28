import styles from './add-button.module.css';
const Input = (props)=>{
    return (
        <div className={styles.input}>
            {/* <label htmlFor={props.input.id}>{props.label}</label> */}
            <input {...props.input} ref={el => props.inputRef.current[props.index] = el} readOnly/>
        </div>
    );
};
export default Input;