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
      
      <div className='flex justify-center my-5'>
      <div className="form-control">
        <div className="input-group">
          <input type="text" placeholder="Search…" className="input input-bordered" />
          <button className="btn btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>
      </div>
      </div>

      <table className="table w-3/4 mx-auto">
        {/* head */}
        <thead>
          <tr>
            <th>Image & Toy Name</th>
            <th>Sub-category</th>
            <th>Price & Available Quantity</th>
            <th>View Details</th>
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