import { Link } from "react-router-dom";
import banner from "../../assets/images/banner.jpeg";
import banner1 from "../../assets/images/banner1.jpg";

const Home = () => {
    return (
        <div className="container mx-auto mt-8">
            <div className="p-8 rounded-md shadow-md"
                style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover' }}>


                <div className="flex flex-col-reverse md:flex-row items-center gap-6">
                    <div className="bg-white text-black p-3 md:p-6 lg:p-12 rounded-xl drop-shadow-2xl">
                        <h1 className="text-lg md:text-2xl lg:text-4xl font-bold mb-4">Welcome to Task Manager</h1>
                        <p className="md:text-lg mb-4">
                            Organize your tasks efficiently and boost your productivity with our
                            powerful task management tool.
                        </p>
                        <div className="w-fit mx-auto">
                            <Link to="/dashboard"><button className="bg-blue-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700 focus:outline-none shadow-xl">
                                {`Let's Explore`}
                            </button></Link>
                        </div>
                    </div>
                    <div>
                        <img src={banner1} alt="" className="rounded-full drop-shadow-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
