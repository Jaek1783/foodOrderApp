//_app.tsx
import Layout from '../components/Layout/layout';
import '../styles/globals.css';
import React from 'react';
import type {AppProps} from 'next/app';
import MyContext from '../store/context';
interface HeaderType {
    id : string,
    title : string,
    subTitle ?: [
        {id:string, manu:string},
        {id:string, manu:string},
        {id:string, manu:string},
        {id:string, manu:string},
        {id:string, manu:string},
    ]
}
const MyApp = ({Component, pageProps}:AppProps) => {
    const ManuList:HeaderType[] = [
        {id:'manu',title : '메뉴', subTitle:[{id:'pizza',manu:'피자'}, {id:'mybox',manu:'마이박스(1인 메뉴)'}, {id:'set',manu:'세트'}, {id:'pasta-and-chiken',manu:'파스타&치킨'},{id:'side-and-drink',manu:'사이드& 음료'}]},
        {id:'e-coupon',title : 'E쿠폰주문', subTitle:[{id:null, manu:null}, {id:null, manu:null},{id:null, manu:null},{id:null, manu:null},{id:null, manu:null},]},
        {id:'cs',title : '이벤트&제휴', subTitle:[{id:'event',manu:'이벤트'}, {id:'partner-discount',manu:'제휴 할인'}, {id:null,manu:null}, {id:null,manu:null},{id:null,manu:null}]},
        {id:'misc',title : '단체주문', subTitle:[{id:'group-order',manu:'단체 배달'}, {id:'corp-card',manu:'모바일 상품권(단체/기업)'}, {id:'gift-card',manu:'지류 상품권'}, {id:null,manu:null},{id:null,manu:null}]},
        {id:'brand',title : '창업안내', subTitle:[{id:null,manu:'창업문의'},{id:null,manu:null}, {id:null,manu:null}, {id:null,manu:null}, {id:null,manu:null}]},
    ]
    return <MyContext.Provider value={ManuList}>
                <Layout>
                    <Component {...pageProps}/>
                </Layout>
            </MyContext.Provider>

    
}

export default MyApp;