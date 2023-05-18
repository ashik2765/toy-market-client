

const ReviewSection = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Customers Say</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <div className="p-6">
                            <p className="text-gray-600 text-base">I was really impressed with the quality of the toys I received from this website. My kids loved them and they have held up well over time. I would definitely recommend this site to other parents.</p>
                        </div>
                        <div className="px-6 py-4">
                            <p className="text-gray-500 font-semibold">- Jane Doe</p>
                            <p className="text-gray-400 text-sm">Verified Buyer</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <div className="p-6">
                            <p className="text-gray-600 text-base">The customer service at this website is top-notch. I had an issue with my order and they went above and beyond to make it right. I will definitely be a returning customer</p>
                        </div>
                        <div className="px-6 py-4">
                            <p className="text-gray-500 font-semibold">- John Smith</p>
                            <p className="text-gray-400 text-sm">Verified Buyer</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <div className="p-6">
                            <p className="text-gray-600 text-base">I have never seen such a wide variety of toys in one place before. This website has something for every child and every occasion. I will definitely be recommending it to my friends and family</p>
                        </div>
                        <div className="px-6 py-4">
                            <p className="text-gray-500 font-semibold">- Sarah Johnson</p>
                            <p className="text-gray-400 text-sm">Verified Buyer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;