import { useRouter } from "next/router";
const ManuSubPage = ()=>{
    const router = useRouter();
    console.log(router.query);
    return<div>
        <h1>subPage</h1>
    </div>
};
export default ManuSubPage;