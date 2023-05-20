import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import TabDisplay from './TabDisplay';


const CategoryTab = () => {
    const[toys,setToys]= useState([]);
    const[activeTab, setActiveTab] = useState("c11");

    useEffect(()=>{
        fetch(`http://localhost:5000/toy/${activeTab}`)
        .then(res => res.json())
        .then(result => {
            setToys(result)
        } )
    },[activeTab])
    const handleSort = (tab)=>{
        setActiveTab(tab);
    }
    console.log(toys)

    
    return (
        <div>
            <h2 className='text-4xl text-purple-600 font-bold text-center py-20'>Categories</h2>
            <Tabs className="px-4">
            <TabList>
                
                <Tab><button onClick={()=>handleSort('C11')} className="btn btn-primary ">Flaying</button></Tab>
                <Tab><button onClick={()=>handleSort('C12')} className="btn btn-primary ">playing</button></Tab>
                <Tab><button onClick={()=>handleSort('C13')} className="btn btn-primary ">singing</button></Tab>
                
            </TabList>
            <TabPanel>
                
                <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-y-4 justify-around'>

                    {
                        toys.map(toy=><TabDisplay
                        key={toy._id}
                        toy={toy}
                        ></TabDisplay>)
                    }
                {/* <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="max-w-full h-auto"  src={IMG1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="max-w-full h-auto" src={IMG2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="max-w-full h-auto" src={IMG3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div> */}
                </div>
            </TabPanel>
            <TabPanel>

                <div className=' grid lg:grid-cols-3 md:grid-cols-1 gap-y-4 justify-around'>


                {
                        toys.map(toy=><TabDisplay
                        key={toy._id}
                        toy={toy}
                        ></TabDisplay>)
                    }



{/* 
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="max-w-full h-auto" src={IMG3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="max-w-full h-auto" src={IMG2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="max-w-full h-auto" src={IMG1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div> */}
                </div>
            </TabPanel>
            <TabPanel>
                <div className='lg:flex justify-around'>

                {
                        toys.map(toy=><TabDisplay
                        key={toy._id}
                        toy={toy}
                        ></TabDisplay>)
                    }
                {/* <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="max-w-full h-auto" src={IMG2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="max-w-full h-auto" src={IMG1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="max-w-full h-auto" src={IMG3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div> */}
                </div>
            </TabPanel>
        </Tabs>
        </div>
    );
};

export default CategoryTab;