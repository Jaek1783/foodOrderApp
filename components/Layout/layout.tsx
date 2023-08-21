import Header from "../header/header";
import { useState, useRef, useContext} from "react";
import MyContext from "../../store/context";
const Layout = ({children})=>{
    const [title, setTitle] = useState('main');
    const data=useContext(MyContext);
    return <>
        <Header list={data} title={title} setTitle={setTitle}/>
        <main className="allwrap">{children}</main>
    </>
};
export default Layout;