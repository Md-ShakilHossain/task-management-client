
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const LoginWithGoogle = () => {

    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: "top-start",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                const userInfo = {
                    email: result.user.email,
                    name: result.user.displayName,
                    profession: 'Front-end Developer'
                }

                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/dashboard');
                    })
            })
    }

    return (
        <div className="w-fit mx-auto">
            <div
                onClick={handleGoogleSignIn}
                className="my-4 bg-white rounded-xl p-4">
                <button
                    className="bg-blue-500 py-2 px-6 text-white font-semibold rounded-xl shadow-2xl max-w-sm mx-auto">Login with Google
                </button>
            </div>
        </div>
    );
};

export default LoginWithGoogle;