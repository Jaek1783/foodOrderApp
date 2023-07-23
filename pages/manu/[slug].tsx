import Manu from '../../components/UI/manu/manu'
const ManuSubPage = ()=>{
    const manu = [
        {id : 'm1', title:'씨푸드킹', src:'/manu/manu01.png', Mprice :'30,500', Lprice:'36,900', desc:'#통새우&통관자 #프레첼 치즈엣지조합 #달콤한 디저트 엣지'},
        {id : 'm2', title:'씨푸드킹', src:'/manu/manu02.png', Mprice :'30,500', Lprice:'36,900', desc:'#통새우&통관자 #프레첼 치즈엣지조합 #달콤한 디저트 엣지'},
        {id : 'm3', title:'씨푸드킹', src:'/manu/manu03.png', Mprice :'30,500', Lprice:'36,900', desc:'#통새우&통관자 #프레첼 치즈엣지조합 #달콤한 디저트 엣지'},
        {id : 'm4', title:'씨푸드킹', src:'/manu/manu04.png', Mprice :'30,500', Lprice:'36,900', desc:'#통새우&통관자 #프레첼 치즈엣지조합 #달콤한 디저트 엣지'},
    ]
    return<div>
        <Manu manu={manu}/>
    </div>
};
export default ManuSubPage;