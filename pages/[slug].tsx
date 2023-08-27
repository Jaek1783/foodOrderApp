import { useRouter } from "next/router";
import LoginPage from "../pages/sign/login";
const SubPage = ()=>{
    const router = useRouter();
    const slug = router.query.slug
    console.log(slug)
    let contents;
    if(slug === 'e-coupon'){
        alert('로그인 후 이용 가능 합니다.');
        router.push(`/sign/login`)
        contents = <LoginPage/>
    }
    return <>
        {contents}
    </>
};
export default SubPage;