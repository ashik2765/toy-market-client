import { Link } from "react-router-dom";
import logo from '../../../assets/bannerdoll.jpg'


const Login = () => {
    const handleLogin =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 me-10">
                    <img className="rounded-full" src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name="password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        </form>
                        <p>Do Not Have An Account? <Link className="text-blue-600" to="/register">Register</Link></p>
                    </div>

                    <div className="flex w-full p-5">
                        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">Google</div>
                        <div className="divider divider-horizontal">OR</div>
                        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">Facebook</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;