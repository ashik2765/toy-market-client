import { Link } from "react-router-dom";


const TabDisplay = ({ toy }) => {
    const { _id,Product_name, Product_picture,Descriptions } = toy;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="max-w-full h-auto" src={Product_picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{Product_name}</h2>
                <p>{Descriptions}</p>
                <div className="card-actions justify-end">
                   <Link to={`/details/${_id}`}> <button  className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TabDisplay;