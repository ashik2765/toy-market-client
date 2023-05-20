

const AddToy = () => {
    const handleAddedToy = (event)=>{
        event.preventDefault()

        const form = event.target;
        const Product_name = form.name.value;
        const Product_picture = form.picture.value;
        const Seller = form.sellerName.value;
        const SellerEmail = form.sellerEmail.value;
        const Product_price = form.price.value;
        const ratings = form.rating.value;
        const Product_quantity = form.quantity.value;
        const Descriptions = form.description.value;
        const category = form.subCategory.value;
        
        const Details ={
            Product_name,
            Product_picture,
            Seller,
            SellerEmail,
            Product_price,
            ratings,
            Product_quantity,
            Descriptions,
            category
        }
        console.log(Details)

        fetch("https://toy-shop-server-ashik2765.vercel.app/postToy",{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(Details)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
        })

    }
    return (
        <div className="max-w-lg mx-auto py-8">
            <h2 className="text-3xl font-bold mb-6">Add A Toy</h2>
            <form onSubmit={handleAddedToy} className="grid grid-cols-2 gap-6">
                <div>
                    <label htmlFor="picture" className="block text-gray-700 font-medium mb-1">Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Picture URL</label>
                    <input type="text" id="pictur" name="picture" className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="sellerName" className="block text-gray-700 font-medium mb-1">Seller Name</label>
                    <input type="text" id="sellerName" name="sellerName" className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="sellerEmail" className="block text-gray-700 font-medium mb-1">Seller Email</label>
                    <input type="email" id="sellerEmail" name="sellerEmail" className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="subCategory" className="block text-gray-700 font-medium mb-1">Sub-category</label>
                    <select id="subCategory" name="subCategory" className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500">
                        <option value="Playing Elephent">Playing Elephent</option>
                        <option value="Flaying Elephent">Flaying Elephent</option>
                        <option value="Singing Elephent">Singing Elephent</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="price" className="block text-gray-700 font-medium mb-1">Price</label>
                    <input type="text" id="price" name="price" className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="rating" className="block text-gray-700 font-medium mb-1">Rating</label>
                    <input type="text" id="rating" name="rating" className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="quantity" className="block text-gray-700 font-medium mb-1">Available Quantity</label>
                    <input type="number" id="quantity" name="quantity" className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="col-span-2">
                    <label htmlFor="description" className="block text-gray-700 font-medium mb-1">Detail Description</label>
                    <textarea id="description" name="description" rows="5" className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"></textarea>
                </div>
                <div className="col-span-2">
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300">Add Toy</button>
                </div>
            </form>
        </div>
    );
};

export default AddToy;