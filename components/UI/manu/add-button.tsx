import Input from "./input";
import { useEffect, useRef } from "react";
import styles from './add-button.module.css';
const AddManuButton = ({index, inputRef})=>{
    const btnRef = useRef([]);
    const numHandler = (btn,index)=>{
        const id = btn.id;
        const max = inputRef.current[index].max;
        const min = inputRef.current[index].min;
            if(id === 'increment'){
                if(inputRef.current[index].value >= min && inputRef.current[index].value <= max-1){
                inputRef.current[index].value = parseInt(inputRef.current[index].value) + 1 ;
                }
            }else{
                if(inputRef.current[index].value >= min+1 && inputRef.current[index].value <= max){
                inputRef.current[index].value = parseInt(inputRef.current[index].value) - 1 ;
                }
            }
    };
    return <div className={styles.addBucket}>
                <button id="increment" onClick={()=>{numHandler(btnRef.current[0],index)}} ref={btn => btnRef.current[0] = btn}>+</button>
                <form>
                    <Input label='Amount' input={{
                        id:'amount',
                        type:'number',
                        min:'0',
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
export default AddManuButton;