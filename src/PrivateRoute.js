import React, { useContext } from 'react'
import { Route,Redirect } from 'react-router';
import { AuthContext } from './Authorization';

const PrivateRoute = ({children,...rest}) => {
    const {currentUser}  = useContext(AuthContext);
    return (
        <Route 
        {...rest}
        render={()=>{
            return currentUser?children:<Redirect to="/login" />;
        }}
        />
    )
}

export default PrivateRoute
