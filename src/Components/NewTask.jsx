import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAuth from "../Hooks/useAuth";

const NewTask = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const onSubmit = data => {
        const taskInfo = {
            title: data.title,
            description: data.description,
            deadline: data.deadline,
            priority: data.priority,
            email: user.email
        }
        console.log(taskInfo);

        axiosPublic.post('/tasks', taskInfo)
            .then(res => {
                if (res.data.insertedId) {
                    console.log('Task added successfully');
                    reset();
                    Swal.fire({
                        position: "top-start",
                        icon: "success",
                        title: "Task added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard');
                }
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div className="w-4/5 mx-auto mt-16 py-10 bg-slate-300 rounded-lg">
            <div className="card bg-white max-w-sm mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}
                    className="card-body">
                    <h3 className="text-2xl text-blue-500 font-bold text-center mb-4">Give Task Information</h3>
                    <div className="form-control flex flex-col">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text"
                            {...register('title', { required: true })}
                            placeholder="Title"
                            className="input input-bordered mt-2" />
                        {errors.title?.type === 'required' && <p className="text-red-500 mt-2">Title is required.</p>}
                    </div>
                    <div className="form-control flex flex-col">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text"
                            {...register('description', { required: true })}
                            placeholder="Description"
                            className="input input-bordered mt-2" />
                        {errors.description?.type === 'required' && <p className="text-red-500 mt-2">Description is required.</p>}
                    </div>
                    <div className="form-control flex flex-col">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input type="date"
                            {...register('deadline', { required: true })}
                            placeholder="Deadline"
                            className="input input-bordered mt-2" />
                        {errors.description?.type === 'required' && <p className="text-red-500 mt-2">Description is required.</p>}
                    </div>
                    <div className="form-control flex flex-col">
                        <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        <select defaultValue="default" {...register("priority", { required: true })}
                            className="select select-bordered rounded-md">
                            <option disabled value="default">Select a category</option>
                            <option value="low">Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div className="form-control mt-6">
                        <input className="bg-blue-500 hover:bg-blue-700 cursor-pointer w-full py-2 rounded-lg text-white font-semibold" type="submit" value="Add Task" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default NewTask;