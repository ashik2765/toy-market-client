import Banner from "./Banner";
import CategoryTab from "./CategoryTab";
import Galary from "./Galary";
import ReviewSection from "./ReviewSection";




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Galary></Galary>
            <ReviewSection></ReviewSection>
            <CategoryTab></CategoryTab>
        </div>
    );
};

export default Home;