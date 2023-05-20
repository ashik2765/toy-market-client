import { useLoaderData } from 'react-router-dom';


const ViewDetails = () => {
    const detailsData = useLoaderData();
    console.log(detailsData)
    const {PName,Pphoto} = detailsData;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl h-[vh-700px]">
            <figure><img className='h-96 w-96'  src={Pphoto} alt="Album" /></figure>
            <div className="card-body py-auto">
                <h2 className="card-title">{PName}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;