import { useRouter } from "next/router";
import LoginPage from "../components/UI/login/login";
const SubPage = ()=>{
    const router = useRouter();
    const slug = router.query.slug
    let contents;
    if(slug === 'e-coupon'){
        alert('로그인 후 이용 가능 합니다.');
        contents === <LoginPage/>
    }
    return <div>
        {contents}
    </div>
};
export default SubPage;