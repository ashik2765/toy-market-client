import { Link } from "react-router-dom";


const AllToyRow = ({toy}) => {
    console.log(toy)
    const handleDetails =()=>{
      console.log('connected')
    }

    const {_id,PName,Pphoto,SellerName,SellerEmail,Pprice,Pdescription}=toy;
    return (
        <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-20 h-20">
                    <img src={Pphoto} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{PName}</div>
                  <div className="text-sm opacity-50">{SellerName}</div>
                </div>
              </div>
            </td>
            <td>
              {SellerEmail}
              <br />
              <span className="badge badge-ghost badge-sm">{Pprice}</span>
            </td>
            <td>{Pdescription}</td>
            <th>
              <Link to={`/details/${_id}`}><button onClick={handleDetails} className="btn btn-active btn-ghost ">details</button></Link>
            </th>
          </tr>
    );
};

export default AllToyRow;