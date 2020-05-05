import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({isLoggedIn, onLogin}) => {

        if(isLoggedIn){
            return <Redirect to='/stardb-react' />
        }

        return (
            <div className='jumbotron text-center'>
                <h4>Login to see Secret page</h4>

                <button className='btn btn-primary' 
                        onClick={onLogin}>
                            Login
                </button>
            </div>
        )
    }

export default LoginPage;