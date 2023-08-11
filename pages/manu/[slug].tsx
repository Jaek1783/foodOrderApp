import { useState } from 'react';
import Manu from '../../components/UI/manu/manu'
import PizzaPage from '../../components/UI/manu/pizza';
import { useRouter } from 'next/router';
import NonReadyPage from '../../components/UI/manu/non-ready';

const ManuSubPage = ()=>{
    const router = useRouter();
    const slug = router.query.slug;
   let contents;
   if(slug === 'pizza'){
    contents = <PizzaPage/>
   }
   else{
    contents = <NonReadyPage/>
   }
    return<Manu slug={slug}>
        {contents}
    </Manu>
};
export default ManuSubPage;