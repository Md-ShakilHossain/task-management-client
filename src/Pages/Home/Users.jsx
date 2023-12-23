import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";



const Users = () => {
    const axiosPublic = useAxiosPublic();


    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users');
            return res.data
        }
    });

    return (
        <div className="w-4/5 mx-auto mt-12">
            <hr className="border border-blue-500 mt-4" />
            <h2 className="md:text-2xl lg:text-4xl font-bold text-center">Users who are taking services from us</h2>
            <hr className="border border-blue-500 mt-4" />
            {users.length>0 ? <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Profession</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => <tr key={user._id} className="bg-blue-200">
                            <td>
                                <div className="flex items-center gap-3">
                                    <div>
                                        <div className="font-bold">{user.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {user.profession}
                            </td>
                            <td>{user.email}</td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div> : <h2 className="text-2xl font-bold text-center mt-12 text-red-500">There is no user</h2>}
        </div>
    );
};

export default Users;