import { useRouter } from "next/router";
const ManuPage = ()=>{
    const router = useRouter();
    console.log(router.query);
    return <div>
        <h1>this Page is {router.query.slug} page </h1>
    </div>
};
export default ManuPage;