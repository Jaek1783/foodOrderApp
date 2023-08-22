import Link from 'next/link';
import styles from './nav.module.css'
import SubManu from '../Layout/sub-manu';
import {useRef} from 'react';
const Navigation = ({title,setTitle,activeManu, setActiveManu, ManuList, SubList})=>{
    return <nav className={styles.nav}>
                <ul className={styles.navContainer}>
                    {ManuList.map((manu,index)=>{
                        // if(manu.id === '')
                        const subRef = useRef(null);
                        const manuMouseOver = (id)=>{
                            setTitle(id)
                            // subRef.current.style.display='block'
                        }
                        const mouseLeave = ()=>{
                            setTitle('main');
                            subRef.current.style.display='none'
                        }
                        return <li key={index} 
                                   onMouseOver={()=>{manuMouseOver(manu.id)}}
                                >
                            {SubList.map((subItem,index)=>{
                                console.log(subItem)
                                if(subItem.id === manu.id){
                                    return <Link href={subItem.sub[0].id ? `/${manu.id}/${subItem.sub[0].id}`:`/${manu.id}`} key={index}>{manu.title}</Link>
                                }
                            })}
                            
                            {title === 'e-coupon' ? null : 
                            <SubManu 
                            manu={manu} 
                            SubList={SubList} 
                            subRef={subRef} 
                            title={title}
                            mouseLeave={mouseLeave}
                        />
                            }
                            
                        </li>
                    })}
                </ul>
            </nav>
};
export default Navigation;