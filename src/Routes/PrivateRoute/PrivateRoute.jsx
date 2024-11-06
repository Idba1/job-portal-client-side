import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Circles } from 'react-loader-spinner';
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Circles
                    height="80"
                    width="80"
                    color="#0E46A3"
                    ariaLabel="circles-loading"
                    visible={true}
                />
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/register" state={{ from: location }} replace />;
    }

    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
