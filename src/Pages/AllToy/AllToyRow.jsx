import { Link } from "react-router-dom";


const AllToyRow = ({toy}) => {
    console.log(toy)
    const handleDetails =()=>{
      console.log('connected')
    }

    const {
      _id,
      Product_name,
      Product_picture,
      Seller,
      Product_price,
      Product_quantity,
      category
    }=toy;
    return (
        <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-20 h-20">
                    <img src={Product_picture} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{Product_name}</div>
                  <div className="text-sm opacity-50"> <strong>Seller: {Seller}</strong> </div>
                </div>
              </div>
            </td>
            <td>
              {category}
            </td>
            <td>Price: {Product_price}
            <br />
              <span className="badge badge-ghost badge-sm">Quantity: {Product_quantity}</span>
            </td>
            <td>
              <Link to={`/details/${_id}`}><button onClick={handleDetails} className="btn btn-active btn-ghost ">details</button></Link>
            </td>
            <td>
              <Link to={`/details/${_id}`}><button onClick={handleDetails} className="btn btn-active btn-ghost ">Delete</button></Link>
            </td>
          </tr>
    );
};

export default AllToyRow;