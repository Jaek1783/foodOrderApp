//index.tsx
import Section01 from "../components/UI/section01/section01";
import Section02 from "../components/UI/section02/section02";
import Footer from "../components/UI/footer/footer";
const HomePage = ()=>{
    return <>
    <div className='sectionContainer'>
        <span className="safety">FOOD<br/>SAFETY<br/>피자헛</span>
        <Section01/>
        <Section02/>
    </div>
        <Footer />
    </>
}

export default HomePage;