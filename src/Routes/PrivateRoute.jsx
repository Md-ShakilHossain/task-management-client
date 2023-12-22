
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from '../Hooks/useAuth';



const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();


    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user) {
        return children;
    }

    const alert = () => {
        Swal.fire({
            title: 'Login First',
            text: 'You Need to Login First',
            icon: 'warning',
            confirmButtonText: 'Okay'
        })
     }

    return <div> <Navigate to="/login" state={{from: location}} replace></Navigate>
    {
        alert()
    }
    </div> 
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;