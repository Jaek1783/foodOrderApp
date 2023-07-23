import Image from "next/image";
import styles from './header.module.css';
import Link from "next/link";
import SubTitle from "./sub-title";
const Header = ({list, setTitle, subTitleRef, title})=>{
    const handleMouseOver = (id) => {
        setTitle(id)
    }
    return  <header className={styles.headerContainer}>
                <h1><Link href='/'><Image src={'/logo/headerLogo.png'} alt={`로고 이미지`} width={175} height={35}/></Link></h1>
                <nav>
                    <ul className={styles.headerManuList}>
                        {list.map(list=>{
                            return <li key={list.title}><Link href={list.subTitle[0].id ? `/${list.id}/${list.subTitle[0].id}`:`/${list.id}`}
                            onMouseOver={() => handleMouseOver(list.id)}
                            >{list.title}</Link></li>
                        })}
                    </ul>
                </nav>
                <button className={styles.headerBtn} onMouseOver={()=>{setTitle('none')}}>
                    <span>
                        <Image src={'/icon/adress.png'} alt={'위치 아이콘'} width={25} height={25}/>
                    </span>
                    <span>주소를 입력해 주세요</span>
                </button>
                <div className={styles.headerUserManuList}>
                    <ul>
                        <li><Link href={'#'}><Image src={'/icon/user.png'} alt={'user이미지'} width={25} height={25} /></Link></li>
                        <li><Link href={'#'}><Image src={'/icon/add.png'} alt={'user이미지'} width={30} height={30} /></Link><span className={styles.issueNum}>0</span></li>
                        <li className={styles.hamburgerBar}>
                            <span></span>
                            <span></span>
                        </li>
                    </ul>
                </div>
                {title === 'none' ? '':<SubTitle list={list} title={title} subTitleRef={subTitleRef} setTitle={setTitle}/>}
            </header>
    
};
export default Header;