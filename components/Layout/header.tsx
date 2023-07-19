import Image from "next/image";
import styles from './header.module.css';
import Link from "next/link";
interface HeaderType {
    title : string,
    subTitle : {
        manu01 : string,
        manu02 : string,
        manu03 : string,
        manu04 : string,
        manu05 : string,
    }
}
const Header = ()=>{
    const ManuList:HeaderType[] = [
        {title : '메뉴', subTitle : { manu01:'피자', manu02 : '마이박스', manu03: '세트', manu04:'파스타&치킨',manu05:'사이드음료'}},
        {title : 'E쿠폰주문', subTitle : { manu01:'', manu02 : '', manu03: '', manu04:'',manu05:''}},
        {title : '이벤트&제휴', subTitle : { manu01:'', manu02 : '이벤트', manu03: '제휴할인', manu04:'',manu05:''}},
        {title : '단체주문', subTitle : { manu01:'', manu02 : '', manu03: '단체배달', manu04:'모바일상품권',manu05:'지류상품권'}},
        {title : '창업안내', subTitle : { manu01:'', manu02 : '', manu03: '', manu04:'',manu05:'창업문의'}},
    ]
    return  <div className={styles.headerContainer}>
                <h1><Image src={'/logo/headerLogo.png'} alt={`로고 이미지`} width={175} height={35}/></h1>
                <nav>
                    <ul className={styles.headerManuList}>
                        {ManuList.map(list=>{
                            console.log(list.subTitle);
                            return <li key={list.title}><Link href={`#`}>{list.title}</Link></li>
                        })}
                    </ul>
                </nav>
                <button className={styles.headerBtn}>
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
            </div>
    
};
export default Header;