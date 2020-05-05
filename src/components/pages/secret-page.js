import React from 'react';
import { Redirect } from 'react-router-dom';

const SecretPage = ({isLoggedIn, onLogOut}) => {

    if (isLoggedIn){
        return (
            <div className='jumbotron text-center'>
                <h3>This Page is full of Secrets!!!</h3>
                <button className='btn btn-primary' 
                        onClick={onLogOut}>
                            Log Out
                </button>
            </div>
        )
    }

    return <Redirect to='/stardb-react/login' />
}

export default SecretPage;