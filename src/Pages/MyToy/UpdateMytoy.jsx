import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'


const UpdateMytoy = () => {
  const myToy = useLoaderData();


  const {
    _id,
    Product_picture,
    Product_price,
    Product_quantity,
    Descriptions
  } = myToy;
  console.log('dekho', _id)

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.Pprice.value;
    const quantity = form.Pquantity.value;
    const description = form.Pdescription.value;

    const updatedToy = { price, quantity, description }
    console.log(updatedToy)

    fetch(`https://toy-shop-server.vercel.app/updateToy/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedToy),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Done',
            text: 'Done!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        }
      })

  }
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4">
          {/* Left Section - Image */}
          <img src={Product_picture} alt="Toy" className="w-96 h-96 mx-auto mt-14" />
        </div>
        <div className="p-4">
          {/* Right Section - Form */}
          <h1 className="text-2xl text-center font-bold mb-4">Update Your Toy</h1>
          <form onSubmit={handleUpdate} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                Price:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="text"
                name="Pprice"
                defaultValue={Product_price}
                placeholder="Enter price"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                Available Quantity:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="quantity"
                type="text"
                defaultValue={Product_quantity}
                name="Pquantity"
                placeholder="Enter quantity"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Detail Description:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                name="Pdescription"
                defaultValue={Descriptions}
                placeholder="Enter description"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="btn-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMytoy;