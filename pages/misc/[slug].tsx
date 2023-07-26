import { useRouter } from "next/router";

const Misc = ()=>{
    const router = useRouter();
    return <div>
        <h1>this page is {router.query.slug} page</h1>
    </div>
};
export default Misc;