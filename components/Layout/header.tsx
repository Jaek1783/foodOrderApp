import Image from "next/image";
import styles from './header.module.css';
import Link from "next/link";
import IconHaeder from "./iconHaeder";
import AddressButton from "./address-button";
import Navigation from "./nav";
import { useRef } from "react";

const Header = ({list, setTitle, title})=>{
    const headerRef = useRef(null);
    const spanRef = useRef(null);
    const mouseLeave = ()=>{
        headerRef.current.style.height=87+'px';
    };
    return  <header className={styles.headerContainer} ref={headerRef} onMouseLeave={()=>{mouseLeave()}}>
                <h1>
                    <Link href='/'>
                        <Image src={'/logo/headerLogo.png'} alt={`로고 이미지`} width={175} height={35} priority/>
                    </Link>
                </h1>
                <Navigation 
                    list={list} 
                    setTitle={setTitle} 
                    title={title} 
                    header={headerRef}/>
                <AddressButton/>
                <IconHaeder spanRef={spanRef}/>
            </header>
    
};
export default Header;