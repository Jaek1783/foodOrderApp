import Header from "./header";
import styles from './header.module.css';
const Layout = ({children})=>{
    return <header>
        <Header/>
        <main>{children}</main>
        
    </header>
};
export default Layout;