import Header from "./header";
import { useState, useRef} from "react";
interface HeaderType {
    id : string,
    title : string,
    subTitle ?: [
        {manu ?: string},
        {manu ?: string},
        {manu ?: string},
        {manu ?: string},
        {manu : string},
    ]
}
const Layout = ({children})=>{
    const [title, setTitle] = useState('m2');
    const subTitleRef = useRef(null);
    const ManuList:HeaderType[] = [
        {id:'m1',title : '메뉴', subTitle:[{manu:'피자'}, {manu:'마이박스(1인 메뉴)'}, {manu:'세트'}, {manu:'파스타&치킨'},{manu:'사이드& 음료'}]},
        {id:'m2',title : 'E쿠폰주문', subTitle:[{manu:null}, {manu:null}, {manu:null}, {manu:null},{manu:null}]},
        {id:'m3',title : '이벤트&제휴', subTitle:[{manu:'이벤트'}, {manu:'제휴 할인'}, {manu:null}, {manu:null},{manu:null}]},
        {id:'m4',title : '단체주문', subTitle:[{manu:'단체 배달'}, {manu:'모바일 상품권(단체/기업)'}, {manu:'지류 상품권'}, {manu:null},{manu:null}]},
        {id:'m5',title : '창업안내', subTitle:[{manu:null}, {manu:null}, {manu:null}, {manu:null},{manu:'창업문의'}]},
    ]
    return <>
        <Header list={ManuList} title={title} setTitle={setTitle} subTitleRef={subTitleRef}/>
        <main>{children}</main>
    </>
};
export default Layout;