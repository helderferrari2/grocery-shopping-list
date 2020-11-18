import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { checkUserAuth, getToken } from "../store/ducks/auth"
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserAuth())
    }, []);

    const user = useSelector(state => state.auth)
    const isAuthenticated = user && getToken() ? true : false;

    return <Route {...rest} render={(props) => (
        isAuthenticated
            ? <Component {...props} user={user} />
            : <Redirect to='/login' />
    )}
    />
}

export default PrivateRoute;

// function PrivateRoute({ component: Component, ...rest }) {
//     // const { isAuthenticated } = useSelector((state) => state.auth);
//     const isAuthenticated = true

//     return (
//         <Route {...rest} render={(props) =>

//             isAuthenticated ?
//                 (
//                     <Component {...props} />
//                 ) :
//                 (
//                     <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
//                 )
//         }
//         />
//     );
// }