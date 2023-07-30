import Input from "./input";
import { useEffect, useRef } from "react";
import styles from './add-button.module.css';
import Btn from "../../Layout/btn";
const AddManuButton = ({index, value, setValue})=>{
    const btnRef = useRef([]);
    const numHandler = (btn,index)=>{
        const id = btn.id;
            if(id === 'increment'){
                if(value <= 4){
                    setValue(val => val+= 1);
                }
                
            }else{
                if(value >= 1){
                    setValue(val => val -= 1);
                }
                
            }
    };
    return <div className={styles.addBucket}>
                <Btn><button 
                        id="increment" 
                        onClick={()=>{numHandler(btnRef.current[0],index)}} 
                        ref={btn => btnRef.current[0] = btn}>
                            +
                        </button>
                </Btn>
                <span>{value}</span>
                <Btn><button 
                        id="descrement" 
                        ref={btn=> btnRef.current[1]=btn} 
                        onClick={()=>{numHandler(btnRef.current[1],index)}}>
                        -
                    </button>
                </Btn>
            </div>
};
export default AddManuButton;