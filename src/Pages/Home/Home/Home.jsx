import Banner from "./Banner";
import CategoryTab from "./CategoryTab";
import Gallery from "./Gallery";
import ReviewSection from "./ReviewSection";
import SecondSection from "./SecondSection";




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryTab></CategoryTab>
            <SecondSection></SecondSection>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;