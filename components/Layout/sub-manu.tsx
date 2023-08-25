import styles from './sub-manu.module.css'
const SubManu = ({SubList, ManuList, title})=>{
    // console.log(title)
    return <div className={styles.subManuContainer}>
        <div className={styles.inner}>
            {SubList.map((subItem, subIndex)=>{
                return <ul key={subIndex} style={{display:`${subItem.id === title ? 'block':'none'}`}}>
                    {subItem.sub.map((item, index)=>{
                       return item.manu ?
                         <li key={index}>{item.manu}</li> : null
                    })}
                </ul>
            })}
        </div>
    </div>
};
export default SubManu;