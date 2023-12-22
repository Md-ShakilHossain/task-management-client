import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Dashboard = () => {

    const { user } = useAuth();

    return (
        <div className="mt-12">
            <div className="p-2 md:p-6 bg-gray-300 w-fit h-fit rounded-full mx-auto">
                <img src={user.photoURL} alt="" className="md:h-60 h-24 md:w-60 w-24 rounded-full border-4 border-blue-500"/>
            </div>
            <div className="mt-6 text-center">
                <h2 className="md:text-2xl lg:text-4xl font-bold">Hi! Welcome {user.displayName}. Make Your Life Easier With Us</h2>
                <hr className="mt-4 border border-blue-500"/>
            </div>
            <div className="flex gap-6 mt-6 justify-center">
                <Link to="/newTask"><button className="bg-blue-500 hover:bg-blue-700 py-2 px-6 rounded-lg text-white font-bold">Create New Task</button></Link>
                <Link to="/previousTask"><button className="bg-blue-500 hover:bg-blue-700 py-2 px-6 rounded-lg text-white font-bold">Previous Task</button></Link>
            </div>
            <hr className="mt-4 border border-blue-500"/>
            <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                <div className="bg-pink-500 min-h-screen w-64 md:w-72 lg:w-80 rounded-lg">
                    <h2 className="bg-white p-2 rounded-2xl w-4/5 mx-auto mt-2 text-center font-bold">TO-DO-LISTS</h2>
                </div>
                <div className="bg-blue-500 min-h-screen w-64 md:w-72 lg:w-80 rounded-lg">
                <h2 className="bg-white p-2 rounded-2xl w-4/5 mx-auto mt-2 text-center font-bold">ONGOING-LISTS</h2>
                </div>
                <div className="bg-orange-500 min-h-screen w-64 md:w-72 lg:w-80 rounded-lg">
                <h2 className="bg-white p-2 rounded-2xl w-4/5 mx-auto mt-2 text-center font-bold">COMPLETED-LISTS</h2>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;