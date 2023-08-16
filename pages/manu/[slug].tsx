import Manu from '../../components/UI/manu/manu'
import PizzaPage from '../../components/UI/manu/pizza/pizza';
import { useRouter } from 'next/router';
import NonReadyPage from '../../components/UI/manu/non-ready';
import MyboxPage from '../../components/UI/manu/mybox/mybox';

const ManuSubPage = ()=>{
    const router = useRouter();
    const slug = router.query.slug;
   let contents;
   if(slug === 'pizza'){
    contents = <PizzaPage/>
   }
   else if(slug === 'mybox'){
    contents = <MyboxPage/>
   }
   else{
    contents = <NonReadyPage/>
   }
    return<Manu slug={slug}>
        {contents}
    </Manu>
};
export default ManuSubPage;