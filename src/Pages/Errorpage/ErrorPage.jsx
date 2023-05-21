
import { Link, useRouteError } from 'react-router-dom';
import ErrorImage from '../../assets/error.png';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div>
         <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                {/* <FaceFrownIcon className='w-40 h-40 text-gray-600' /> */}

                <div className='max-w-md text-center'>
                    <img className=' mt-5 pt-5 pb-5 w-25 h-25 ' src={ErrorImage} alt="" />
                    <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
                        <span className='sr-only'>Error</span>
                        {status || 404}
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                        {error?.message}
                    </p>
                    <Link to='/'>
                        <button className="btn">Back to homepage</button>
                    </Link>
                </div>
            </div>
        </section>
       </div>
    );
};

export default ErrorPage;