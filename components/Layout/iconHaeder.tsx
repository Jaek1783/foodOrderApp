import styles from './icon-haeder.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
const IconHaeder = ({spanRef})=>{
    const [active, setActive] = useState<boolean>(true);
    const clickAnimation = ()=>{
        setActive(active => !active);
        if(active){
            spanRef.current.children[0].style.transform='translateY(5px) rotate(45deg)';
            spanRef.current.children[1].style.transform='translateY(-5px) rotate(-45deg)';
        }else{
            spanRef.current.children[0].style.transform='translateY(0) rotate(0)';
            spanRef.current.children[1].style.transform='translateY(0) rotate(0)';
        }
    };
    return <div className={styles.headerUserManuList}>
                <ul>
                    <li>
                        <Link href={'#'}>
                            <Image src={'/icon/user.png'} alt={'user이미지'} width={25} height={25} />
                        </Link></li>
                    <li>
                        <Link href={'/cart'}>
                            <Image src={'/icon/add.png'} alt={'user이미지'} width={30} height={30} />
                        </Link>
                        <span className={styles.issueNum}>0</span>
                    </li>
                    <li>
                        <div className={styles.hamburgerBar} ref={spanRef} onClick={()=>{clickAnimation()}}>
                            <span></span>
                            <span></span>
                        </div>
                    </li>
                </ul>
            </div>
};
export default IconHaeder;