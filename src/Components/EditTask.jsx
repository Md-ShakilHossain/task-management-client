import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";


const EditTask = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const taskInformation = useLoaderData();
    const { title, description, deadline, priority, _id } = taskInformation

    const onSubmit = data => {
        const updatedInfo = {
            title: data.title,
            description: data.description,
            deadline: data.deadline,
            priority: data.priority,
            email: user.email
        }
        console.log(updatedInfo);

        axiosPublic.patch(`/tasks/${_id}`, updatedInfo)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    console.log('Task Edited successfully');
                    reset();
                    Swal.fire({
                        position: "top-start",
                        icon: "success",
                        title: "Task edited successfully",
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
                    <h3 className="text-2xl text-blue-500 font-bold text-center mb-4">Edit {title} Task</h3>
                    <div className="form-control flex flex-col">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text"
                            {...register('title', { required: true })}
                            defaultValue={title}
                            className="input input-bordered mt-2" />
                        {errors.title?.type === 'required' && <p className="text-red-500 mt-2">Title is required.</p>}
                    </div>
                    <div className="form-control flex flex-col">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text"
                            {...register('description', { required: true })}
                            defaultValue={description}
                            className="input input-bordered mt-2" />
                        {errors.description?.type === 'required' && <p className="text-red-500 mt-2">Description is required.</p>}
                    </div>
                    <div className="form-control flex flex-col">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input type="date"
                            {...register('deadline', { required: true })}
                            defaultValue={deadline}
                            className="input input-bordered mt-2" />
                        {errors.description?.type === 'required' && <p className="text-red-500 mt-2">Description is required.</p>}
                    </div>
                    <div className="form-control flex flex-col">
                        <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        <select {...register("priority", { required: true })}
                            defaultValue={priority}
                            className="select select-bordered rounded-md">
                            <option value="low">Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div className="form-control mt-6">
                        <input className="bg-blue-500 hover:bg-blue-700 cursor-pointer w-full py-2 rounded-lg text-white font-semibold" type="submit" value="Update" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default EditTask;