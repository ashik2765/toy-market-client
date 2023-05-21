import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import TabDisplay from './TabDisplay';


const CategoryTab = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("C11");

    useEffect(() => {
        fetch(`https://toy-shop-server.vercel.app/toy/${activeTab}`)
            .then(res => res.json())
            .then(result => {
                setToys(result)
            })
    }, [activeTab])
    const handleSort = (tab) => {
        setActiveTab(tab);
    }
    


    return (
        <div>
            <h2 className='text-4xl text-purple-600 font-bold text-center py-20'>Shop By category</h2>
            <Tabs className="px-4">
                <TabList>

                    <Tab><button onClick={() => handleSort('C11')} className="btn btn-primary ">Flaying</button></Tab>
                    <Tab><button onClick={() => handleSort('C12')} className="btn btn-primary ">playing</button></Tab>
                    <Tab><button onClick={() => handleSort('C13')} className="btn btn-primary ">singing</button></Tab>

                </TabList>
                <TabPanel>

                    <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-y-4 justify-around'>

                        {
                            toys.map(toy => <TabDisplay
                                key={toy._id}
                                toy={toy}
                            ></TabDisplay>)
                        }

                    </div>
                </TabPanel>
                <TabPanel>

                    <div className=' grid lg:grid-cols-3 md:grid-cols-1 gap-y-4 justify-around'>


                        {
                            toys.map(toy => <TabDisplay
                                key={toy._id}
                                toy={toy}
                            ></TabDisplay>)
                        }

                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='lg:flex justify-around'>

                        {
                            toys.map(toy => <TabDisplay
                                key={toy._id}
                                toy={toy}
                            ></TabDisplay>)
                        }

                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTab;