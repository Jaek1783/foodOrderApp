import styles from './header.module.css';
import Image from 'next/image';
const AddressButton = ()=>{
    return <button className={styles.headerBtn}>
                <span>
                    <Image src={'/icon/adress.png'} alt={'위치 아이콘'} width={25} height={25}/>
                </span>
                <span>주소를 입력해 주세요</span>
            </button>
};
export default AddressButton;