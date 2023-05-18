import logo from '../../../assets/logo.webp'

const Banner = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 py-8 px-4 md:px-12">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <img src={logo} alt="Children's toys" className="w-full shadow-2xl rounded-lg" />
                </div>
                <div className="w-full md:w-1/2 md:pl-8 text-white">
                    <h1 className="text-5xl font-bold mb-4">Find the perfect toy for your child</h1>
                    <p className="text-lg mb-8">At our chikdren toy website, we offer a wide selection of toys for all ages. From educational toys to stuffed animals to action figures, we have something for every child. Browse our collection today and find the perfect toy to spark your childs imagination.</p>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-8 rounded-full shadow-lg"><span className="uppercase tracking-wider">Shop now</span></button>
                </div>
            </div>

        </div>
    );
};

export default Banner;