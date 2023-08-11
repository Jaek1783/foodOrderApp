import styles from './login.module.css';
const LoginPage = ()=>{
    return <section className={styles.container}>
        <h1>로그인</h1>
        <div className={styles.wrap}>
        <p>반갑습니다.<br/>로그인 하고 더 큰 혜택을 즐기세요!</p>
        <form>
            <label>
                <span className={styles.text}>{`이메일 (ID)`}</span>
                    <input type="text" placeholder='이메일(ID) 주소를 입력해 주세요'/>
                <span></span>
            </label>
            <label>
                <span className={styles.text}>비밀번호</span>
                    <input type="password" placeholder='비밀번호를 입력해 주세요'/>
                <span></span>
            </label>
            <button className={styles.login}>로그인</button>
        </form>
        <button className={styles.sign}>회원가입</button>
        </div>
    </section>
};
export default LoginPage;