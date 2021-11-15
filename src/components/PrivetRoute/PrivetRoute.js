
import React from 'react';
import useAuth from "../../hooks/useAuth" ;
import { Route, Redirect } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const PrivetRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth() ;
    if(isLoading){
        return <Spinner></Spinner>
    }
    return (
       <Route
       {...rest}
       render={({location}) => user.email? children: 
       <Redirect
        to ={{
            pathname: "/login",
            state:{from: location}
        }}
       > 

       </Redirect>}
       >

       </Route>
    );
};

export default PrivetRoute;