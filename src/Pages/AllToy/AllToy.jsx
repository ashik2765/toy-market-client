import { useEffect, useState } from 'react';
import AllToyRow from './AllToyRow';

const AllToy = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {

    fetch('https://toy-shop-server-ashik2765.vercel.app/toys')
      .then(res => res.json())
      .then(data => setToys(data));


  }, [])
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-3/4 mx-auto">
        {/* head */}
        <thead>
          <tr>
            <th>Image & Toy Name</th>
            <th>Sub-category</th>
            <th>Price & Available Quantity</th>
            <th>View Details</th>

          </tr>
        </thead>
        <tbody>
          
            {
              toys.map(toy => <AllToyRow
              key={toy._id}
              toy={toy}
              ></AllToyRow>)
            }

        </tbody>
      </table>
    </div>
  );
};

export default AllToy;