import { useRouter } from "next/router";
const CSpage = ()=>{
    const router=useRouter();
    return<div>
        <h1>This is {router.query.slug} page</h1>
    </div>
};
export default CSpage;