import Image from "next/image";
import styles from './header.module.css';
import Link from "next/link";
import IconHaeder from "../Layout/iconHaeder";
import AddressButton from "../header/address-button";
import Navigation from "./nav";
import {useRef,useState } from "react";
import SubManu from "../Layout/sub-manu";
const Header = ({setTitle, title, ManuList, SubList})=>{
    const spanRef = useRef(null);
    const leaveHeader = ()=>{
        setTitle('main')
    }
    
    return  <header className={styles.headerContainer}>
                <h1>
                    <Link href='/'>
                        <Image src={'/logo/headerLogo.png'} alt={`로고 이미지`} width={175} height={35} priority/>
                    </Link>
                </h1>
                <Navigation
                    ManuList = {ManuList}
                    SubList={SubList}
                    title={title}
                    setTitle={setTitle}
                />
                <div className={styles.sideManu}>
                    <AddressButton/>
                    <IconHaeder spanRef={spanRef}/>
                </div>
            </header>
    
};
export default Header;