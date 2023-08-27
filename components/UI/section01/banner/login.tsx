import Image from 'next/image';
import styles from './login.module.css'
import { useRouter } from 'next/router';
const LoginContainer = ()=>{
    const router = useRouter();
    const loginPage = ()=>{
        router.push(`/sign/login`);
    };
    return <div className={styles.loginContainer}>
        <ul>
            <li>
                <dl className={styles.loginTitle}>
                    <dt>
                        <span><Image src={'/icon/enter.png'} alt='enter이미지' width={40} height={40}/></span>
                        <p><b>로그인</b>하고 더 많은 혜택을 즐겨보세요!</p>
                    </dt>
                </dl>
            </li>
            <li>
                <div>    
                    <button className={styles.btn} onClick={()=>{loginPage()}}>
                        <span className={styles.t1}>로그인/회원가입</span>
                    </button>
                    <button className={styles.btn}>
                        <span className={styles.t1}>비회원 주문조회</span>
                    </button>
                </div>
                <button className={styles.btn}>
                        <span className={styles.t2}>나의 스탬프</span>
                        <span className={styles.t1}>적립 현황</span>
                    
                </button>
            </li>
        </ul>
    </div>
};
export default LoginContainer;