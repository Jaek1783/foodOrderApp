import Link from 'next/link';
import styles from './sub-manu.module.css'

const SubManu = ({ SubList, manu, subRef, title, mouseLeave}) => {
    return (
        <div className={styles.subManuContainer} 
             ref={subRef} 
             style={{display:`${title === manu.id ? 'block':'none'}`}}
             onMouseLeave={mouseLeave}
             >
            <ul>
                {SubList.map((sub) => {
                    if (sub.id === manu.id && sub.sub) {
                        return sub.sub.map((subItem, subIndex) => (
                            subItem.manu ? 
                            <li key={subIndex}>
                                <Link href={`/manu/${subItem.id}`}>{subItem.manu}</Link>
                                
                            </li> : null
                        ));
                    }
                    return null;
                })}
            </ul>
        </div>
    );
};

export default SubManu;
