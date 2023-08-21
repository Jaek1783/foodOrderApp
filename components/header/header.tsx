import Image from "next/image";
import styles from './header.module.css';
import Link from "next/link";
import IconHaeder from "../Layout/iconHaeder";
import AddressButton from "../header/address-button";
import Navigation from "./nav";
import {useRef,useState } from "react";
const Header = ({list, setTitle, title})=>{    
    const [activeManu, setActiveManu] = useState('main');
    const headerRef = useRef(null);
    const spanRef = useRef(null);
    const logoClick = ()=>{
        setActiveManu('main')
        setTitle('main')
    };
    const logoHover = ()=>{
        setTitle('main')
    }
    const mouseLeave = ()=>{
        headerRef.current.style.height=87+'px';
    };
    console.log(title)
    return  <header className={styles.headerContainer} 
                    ref={headerRef} 
                    onMouseLeave={()=>{mouseLeave()}}
                    style={{height:`${title === 'main' ? 87: title === 'e-coupon' ? 87:200}px`}}>
                <h1  onClick={logoClick}
                     onMouseOver={logoHover}>
                    <Link href='/'>
                        <Image src={'/logo/headerLogo.png'} alt={`로고 이미지`} width={175} height={35} priority/>
                    </Link>
                </h1>
                <Navigation 
                    list={list} 
                    setTitle={setTitle} 
                    title={title} 
                    header={headerRef}
                    activeManu={activeManu}
                    setActiveManu={setActiveManu}
                />
                <AddressButton/>
                <IconHaeder spanRef={spanRef}/>
            </header>
    
};
export default Header;