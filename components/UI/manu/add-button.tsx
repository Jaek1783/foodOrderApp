import Input from "./input";
import { useRef } from "react";
import styles from './add-button.module.css';
const AddButton = ({index})=>{
        const inputRef = useRef([]);
    const btnRef = useRef([]);
    const numHandler = (btn,index)=>{
        const id = btn.id;
        if(id === 'increment'){
            inputRef.current[index].value = parseInt(inputRef.current[index].value) + 1 ;
        }else{
            inputRef.current[index].value = parseInt(inputRef.current[index].value) - 1 ;
        }
    };
    return <div className={styles.addBucket}>
                <button id="increment" onClick={()=>{numHandler(btnRef.current[0],index)}} ref={btn => btnRef.current[0] = btn}>+</button>
                <form>
                    <Input label='Amount' input={{
                        id:'amount',
                        type:'number',
                        min:'1',
                        max:'5',
                        step:'1',
                        value:'0',
                    }}
                    inputRef={inputRef}
                    index={index}
                    />
                </form>
                <button id="descrement" ref={btn=> btnRef.current[1]=btn} onClick={()=>{numHandler(btnRef.current[1],index)}}>-</button>
            </div>
};
export default AddButton;