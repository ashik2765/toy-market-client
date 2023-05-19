import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import IMG1 from '../../../assets/doll-1.jpg'
import IMG2 from '../../../assets/doll-2.jpg'
import IMG3 from '../../../assets/doll-3.jpg'


const CategoryTab = () => {

    
    return (
        <div>
            <h2 className='text-4xl text-purple-600 font-bold text-center py-20'>Categories</h2>
            <Tabs className="px-4">
            <TabList>
                
                <Tab><button className="btn btn-primary ">Premium Toy</button></Tab>
                <Tab><button className="btn btn-primary ">Regular Toy</button></Tab>
                <Tab><button className="btn btn-primary ">Trending Toy</button></Tab>
                
            </TabList>
            <TabPanel>
                <div className='lg:flex justify-around'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="max-w-full h-auto"  src={IMG1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="max-w-full h-auto" src={IMG2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="max-w-full h-auto" src={IMG3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className='lg:flex justify-around'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="max-w-full h-auto" src={IMG3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="max-w-full h-auto" src={IMG2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="max-w-full h-auto" src={IMG1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className='lg:flex justify-around'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="max-w-full h-auto" src={IMG2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="max-w-full h-auto" src={IMG1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="max-w-full h-auto" src={IMG3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                </div>
            </TabPanel>
        </Tabs>
        </div>
    );
};

export default CategoryTab;