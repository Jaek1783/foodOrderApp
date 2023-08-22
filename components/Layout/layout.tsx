import Header from "../header/header";
import { useState} from "react";
import { HeaderType, SubType } from "../../utill/types";
const Layout = ({children})=>{
    const ManuList:HeaderType[] = [
        { id:'manu', title : '메뉴'},
        { id:'e-coupon',title : 'E쿠폰주문'},
        { id:'cs', title : '이벤트&제휴'},
        { id:'misc', title : '단체주문'},
        { id:'brand',title : '창업안내'},
    ]
    const SubList:SubType[] = [
        { id:'manu',
          sub:[
                {id:'pizza',manu:'피자'}, 
                {id:'mybox',manu:'마이박스(1인 메뉴)'}, 
                {id:'set',manu:'세트'}, 
                {id:'pasta-and-chiken',manu:'파스타&치킨'},
                {id:'side-and-drink',manu:'사이드& 음료'}
            ]
        },
        { id:'e-coupon',
          sub:[
                {id:null, manu:null}, 
                {id:null, manu:null},
                {id:null, manu:null},
                {id:null, manu:null},
                {id:null, manu:null}
            ]
        },
        { id:'cs',
            sub:[
                {id:'event',manu:'이벤트'}, 
                {id:'partner-discount',manu:'제휴 할인'}, 
                {id:null,manu:null}, 
                {id:null,manu:null},
                {id:null,manu:null}
            ]
        },
        { id:'misc',
                sub:[
                {id:'group-order',manu:'단체 배달'}, 
                {id:'corp-card',manu:'모바일 상품권(단체/기업)'}, 
                {id:'gift-card',manu:'지류 상품권'}, 
                {id:null,manu:null},
                {id:null,manu:null}
            ]
        },
        { id:'brand',
                sub:[
                    {id:null,manu:'창업문의'},
                    {id:null,manu:null}, 
                    {id:null,manu:null}, 
                    {id:null,manu:null}, 
                    {id:null,manu:null}
                ]
        }
    ]
    const [title, setTitle] = useState('main');
    return <>
        <Header title={title} setTitle={setTitle} ManuList={ManuList} SubList={SubList}/>
        <main className="allwrap">{children}</main>
    </>
};
export default Layout;