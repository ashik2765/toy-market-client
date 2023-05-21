import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [mytoys, setMytoys] = useState([])


    useEffect(() => {
        fetch(`https://toy-shop-server.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(result => {
                setMytoys(result)
            })
    }, [user])


    // Delete method
    const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-shop-server.vercel.app/toys/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your toy is deleted.',
                                'success'
                              )

                        }
                    })
            }
        })


    }

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
                        <th>View Details</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        mytoys.map(mytoy =>
                            <tr key={mytoy._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20 h-20">
                                                <img src={mytoy.Product_picture} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{mytoy.Product_name}</div>
                                            <div className="text-sm opacity-50"> <strong>Seller: {mytoy.Seller}</strong> </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {mytoy.category}
                                </td>
                                <td>Price: {mytoy.Product_price}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Quantity: {mytoy.Product_quantity}</span>
                                </td>
                                <td>
                                    <Link to={`/update/${mytoy._id}`}><button className="btn btn-active btn-ghost ">Update</button></Link>
                                </td>
                                <td>

                                    <Link><button onClick={() => handleDelete(mytoy._id)} className="btn btn-active btn-ghost ">Delete</button></Link>
                                </td>
                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyToys;