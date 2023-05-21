import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }




    return (
        <div>
            <div className="navbar  h-40 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/alltoys'>All Toys</Link></li>
                            <li><a>My Toys</a></li>

                            {
                                user ?
                                    <div>
                                        <li><Link to='/addtoy'>Add A Toy</Link></li>
                                    </div>
                                    : <div></div>
                            }
                            <li><Link to='/blog'>Blogs</Link></li>
                        </ul>
                    </div>
                    <img className='h-20 w-20 rounded-full' src={logo} alt="" />
                    <span className="btn btn-ghost normal-case text-xl">daisyUI</span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/alltoys'>All Toys</Link></li>
                        {user ? <li><Link to='/mytoy'>My Toys</Link></li> : ''}

                        {user ? <li><Link to='/addtoy'>Add A Toy</Link></li> : ''}
                        <li><Link to='/blog'>Blogs</Link></li>
                    </ul>
                </div>
                {user ?
                    <div className="navbar-end">
                        <div className="tooltip tooltip-left" data-tip={user.email}>
                            <img className='h-16 w-16 rounded-full me-4' src={logo} alt="" />
                        </div>

                        <Link onClick={handleLogOut} to='/login'><button className="btn btn-primary">logout</button></Link>

                    </div>
                    : <div className="navbar-end">
                        <Link to='/login'><button className="btn btn-primary">Login</button></Link>

                    </div>

                }
            </div>
        </div>
    );
};

export default NavBar;