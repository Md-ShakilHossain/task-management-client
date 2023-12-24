import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Tasks = () => {

    const axiosPublic = useAxiosPublic();

    const { data: tasks = [] } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosPublic.get("/tasks");
            return res.data;
        }
    });

    return (
        <div className="w-4/5 mx-auto mt-12">
            <hr className="border border-blue-500 mt-4" />
            <h2 className="md:text-2xl lg:text-4xl font-bold text-center">All Tasks</h2>
            <hr className="border border-blue-500 mt-4" />

            {tasks.length > 0 ? <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Task Title</th>
                            <th>Task Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => <tr key={task._id} className="bg-blue-200">
                            <td>
                                <div className="flex items-center gap-3">
                                    <div>
                                        <div className="font-bold">{task.title}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {task.description}
                            </td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div> : <h2 className="text-2xl font-bold text-center mt-12 text-red-500">There is no Task</h2>}
        </div>
    );
};

export default Tasks;