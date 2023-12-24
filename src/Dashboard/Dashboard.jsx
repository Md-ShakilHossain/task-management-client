import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
const Dashboard = () => {

    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/tasks?email=${user.email}`);
            return res.data;
        }
    });
    refetch();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/tasks/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    };


    return (
        <div className="mt-12">
                <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100"><div className="p-2 md:p-6 w-fit h-fit mx-auto rounded-full">
                    <img src={user.photoURL} alt="" className="md:h-60 h-24 md:w-60 w-24 rounded-full border-4 border-blue-500" />
                </div></div>
            
            <div className="mt-12 text-center">
                <h2 className="md:text-2xl lg:text-4xl font-bold">Hi! Welcome {user.displayName}. Make Your Life Easier With Us</h2>
                <hr className="mt-4 border border-blue-500" />
            </div>
            <div className="flex gap-6 mt-6 justify-center">
                <Link to="/newTask"><button className="bg-blue-500 hover:bg-blue-700 py-2 px-6 rounded-lg text-white font-bold">Create New Task</button></Link>
                <Link to="/previousTask"><button className="bg-blue-500 hover:bg-blue-700 py-2 px-6 rounded-lg text-white font-bold">Previous Task</button></Link>
            </div>
            <hr className="mt-4 border border-blue-500" />
            <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                <div className="bg-pink-500 min-h-screen w-64 md:w-72 lg:w-80 rounded-lg">
                    <h2 className="bg-white p-2 rounded-2xl w-4/5 mx-auto mt-2 text-center font-bold">TO-DO-LISTS</h2>
                    <div className="p-2">
                        {
                            tasks.map((task, i) => <div key={task._id} className="p-2 bg-white rounded-2xl w-4/5 mx-auto mt-2">
                                <h4 className="font-bold">{i + 1}. {task.title}</h4>
                                <p>{task.description}</p>
                                <p><span className="font-semibold">Deadline:</span> {task.deadline}</p>
                                <p><span className="font-semibold">Priority:</span> {task.priority}</p>

                                <div className="flex gap-4 justify-center mt-2">
                                    <Link to={`/tasks/${task._id}`}><button><FaEdit></FaEdit></button></Link>
                                    <button onClick={() => handleDelete(task._id)}><FaTrash></FaTrash></button>
                                </div>
                            </div>)
                        }
                    </div>
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