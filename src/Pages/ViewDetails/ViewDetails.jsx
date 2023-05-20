import { useLoaderData } from 'react-router-dom';


const ViewDetails = () => {

    const detailsData = useLoaderData();
    console.log(detailsData)
    const { Product_name, Product_picture, Product_price, ratings, Product_quantity,
        Seller, SellerEmail, Descriptions } = detailsData;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl h-[vh-700px]">
            <figure><img className='h-96 w-96' src={Product_picture} alt="Album" /></figure>
            <div className="card-body py-auto flex justify-around flex-row">
                <div className='space-y-4'>
                    <h2 className="card-title text-2xl">{Product_name}</h2>
                    <h3 className='text-xl'><strong>Price:</strong> ${Product_price}</h3>
                    <h4> <strong>Seller:</strong> {Seller}</h4>
                    <p>{SellerEmail}</p>
                    <p><strong>Ratings :</strong>{ratings}</p>
                    <p><strong>Quantity: </strong>{Product_quantity} Pice</p>

                </div>
                <div>
                    <h3 className='text-xl text-center font-bold'>Descriptions</h3>
                    <p className='font-bold'>{Descriptions}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;