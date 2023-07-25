import { useState } from 'react';
import Manu from '../../components/UI/manu/manu'
import PizzaPage from '../../components/UI/manu/pizza';
import { useRouter } from 'next/router';
const ManuSubPage = ()=>{
    const manu = [
        {id : 'm1', title:'씨푸드킹', src:'/manu/manu01.png', Mprice :'30,500', Lprice:'36,900', desc:'#통새우&통관자 #프레첼 치즈엣지조합 #달콤한 디저트 엣지'},
        {id : 'm2', title:'토핑킹&수퍼슈프림', src:'/manu/manu02.png', Mprice :null, Lprice:'36,400 ~', desc:'#하프앤하프 #피자헛베스트조합'},
        {id : 'm3', title:'립스테이크&쉬림프', src:'/manu/manu03.png', Mprice :null, Lprice:'37,900 ~', desc:'#하프앤하프 #프리미엄갈비맛 #스테디'},
        {id : 'm4', title:'수퍼슈프림', src:'/manu/manu04.png', Mprice :'28,500 ~', Lprice:'33,900 ~', desc:'#콤비네이션 #베스트셀러 #스테디셀러'},
        {id : 'm5', title:'토핑킹', src:'/manu/manu05.png', Mprice :'30,500', Lprice:'36,900', desc:'#미트토핑360g #캠핑에딱 #BBQ플래터'},
        {id : 'm6', title:'립스테이크', src:'/manu/manu06.png', Mprice :null, Lprice:'36,400 ~', desc:'#갈비맛 #스테이크 #180g'},
        {id : 'm7', title:'베이컨포테이토', src:'/manu/manu07.png', Mprice :null, Lprice:'37,900 ~', desc:'#베이컨슬라이스 #포테이토 #스테디셀러'},
        {id : 'm8', title:'직화불고기', src:'/manu/manu08.png', Mprice :'28,500 ~', Lprice:'33,900 ~', desc:'#불고기피자원조 #숯불향 #스테디셀러'},
        {id : 'm9', title:'아메리칸스페셜', src:'/manu/manu09.png', Mprice :'9,800 ~', Lprice:null, desc:'#비프&포크 #미국현지의맛 #초특가할인'},
        {id : 'm10', title:'LA BBQ불고기', src:'/manu/manu10.png', Mprice :'28,500 ~', Lprice:'33,900 ~', desc:'#남녀노소좋아하는불고기 #미국BBQ소스'},
        {id : 'm11', title:'콤비네이션 1958', src:'/manu/manu11.png', Mprice :'28,500 ~', Lprice:'33,900 ~', desc:'#오리지널리티 #피자헛의원조 #스테디'},
    ];
    const router = useRouter();
    const slug = router.query.slug;
    return<Manu slug={slug}>
        {slug === 'pizza' ? <PizzaPage manu={manu}/> :''}
    </Manu>
};
export default ManuSubPage;