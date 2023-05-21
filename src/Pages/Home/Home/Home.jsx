import Banner from "./Banner";
import CategoryTab from "./CategoryTab";
import Gallery from "./Gallery";
import ReviewSection from "./ReviewSection";




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryTab></CategoryTab>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;