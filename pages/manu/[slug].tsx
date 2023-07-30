import { useState } from 'react';
import Manu from '../../components/UI/manu/manu'
import PizzaPage from '../../components/UI/manu/pizza';
import { useRouter } from 'next/router';
const ManuSubPage = ()=>{
    const manu = [
        {id : 'm1', title:'씨푸드킹', Mprice :30500, Lprice:36900, desc:'#통새우&통관자 #프레첼 치즈엣지조합 #달콤한 디저트 엣지', 
        modal:'쫄깃한 통관자와 탱글탱글 통새우가 듬뿍!달콤한 프레첼 엣지까지~'},
        {id : 'm2', title:'토핑킹&수퍼슈프림',  Mprice :null, Lprice:36400, desc:'#하프앤하프 #피자헛베스트조합',
        modal:'피자헛 베스트 메뉴 2종, 토핑킹과 수퍼슈프림을 한 판에!\n(*모든 사진은 이미지컷으로 실제 제품과 다를 수 있습니다.)'},
        {id : 'm3', title:'립스테이크&쉬림프',Mprice :null, Lprice:37900, desc:'#하프앤하프 #프리미엄갈비맛 #스테디',
        modal:'프리미엄 갈비맛 스테이크와 케이준 쉬림프 피자를 한 판에!\n(*모든 사진은 이미지컷으로 실제 제품과 다를 수 있습니다.)'},
        {id : 'm4', title:'수퍼슈프림',Mprice :28500, Lprice:33900, desc:'#콤비네이션 #베스트셀러 #스테디셀러',
        modal:'오랫동안 사랑받아온 프리미엄 콤비네이션피자'},
        {id : 'm5', title:'토핑킹',Mprice :30500, Lprice:36900, desc:'#미트토핑360g #캠핑에딱 #BBQ플래터',
        modal:'돌아온 토핑킹, 이번엔 고기 토핑 360g을 한 판 가득 담았다!'},
        {id : 'm6', title:'립스테이크',Mprice :null, Lprice:36400, desc:'#갈비맛 #스테이크 #180g',
        modal:'180g 갈비맛 스테이크가 통째로!'},
        {id : 'm7', title:'베이컨포테이토',Mprice :null, Lprice:37900, desc:'#베이컨슬라이스 #포테이토 #스테디셀러',
        modal:'포테이토의 고소담백한 맛에 감칠맛을 더하다'},
        {id : 'm8', title:'직화불고기',Mprice :28500, Lprice:33900, desc:'#불고기피자원조 #숯불향 #스테디셀러',
        modal:'불맛 가득한 프리미엄 불고기피자'},
        {id : 'm9', title:'아메리칸스페셜',Mprice :9800, Lprice:null, desc:'#비프&포크 #미국현지의맛 #초특가할인',
        modal:'비프, 포크, 소시지 등 다양한 미트와 야채가 풍성하게 들어간 미국 스타일 피자'},
        {id : 'm10', title:'LA BBQ불고기',Mprice :28500, Lprice:33900, desc:'#남녀노소좋아하는불고기 #미국BBQ소스',
        modal:'누구나 좋아하는 불고기에 미국 대표 BBQ 소스를 더한 LA 스타일의 불고기 피자'},
        {id : 'm11', title:'콤비네이션 1958',Mprice :28500, Lprice:33900, desc:'#오리지널리티 #피자헛의원조 #스테디',
        modal:'1958년 출시된 그 맛 그대로 지금까지 전세계적으로 사랑받는 피자'},
    ];
    const router = useRouter();
    const slug = router.query.slug;
    return<Manu slug={slug}>
        {slug === 'pizza' ? <PizzaPage manu={manu}/> :''}
    </Manu>
};
export default ManuSubPage;