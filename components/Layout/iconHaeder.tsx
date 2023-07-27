import styles from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';
const IconHaeder = ()=>{
    return <div className={styles.headerUserManuList}>
                <ul>
                    <li>
                        <Link href={'#'}>
                            <Image src={'/icon/user.png'} alt={'user이미지'} width={25} height={25} />
                        </Link></li>
                    <li>
                        <Link href={'#'}>
                            <Image src={'/icon/add.png'} alt={'user이미지'} width={30} height={30} />
                        </Link>
                        <span className={styles.issueNum}>0</span>
                    </li>
                    <li className={styles.hamburgerBar}>
                        <span></span>
                        <span></span>
                    </li>
                </ul>
            </div>
};
export default IconHaeder;