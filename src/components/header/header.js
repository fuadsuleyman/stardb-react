import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = ({ onServiceChange }) => {

    return (
        <div className="header d-flex">
            <h3>
                <Link to='/stardb-react'>Star DB</Link>
            </h3>
            <ul className="d-flex">
                <li>
                    <Link to='/stardb-react/people/'>People</Link>
                </li>
                <li>
                    <Link to='/stardb-react/planets'>Planets</Link>
                </li>
                <li>
                    <Link to='/stardb-react/starships/'>Starships</Link>
                </li>
                <li>
                    <Link to='/stardb-react/secret'>Secret</Link>
                </li>
                <li>
                    <Link to='/stardb-react/login'>Login</Link>
                </li>
            </ul>
            <button
                onClick={onServiceChange}
                className='btn btn-primary btn-small'>
                Change Service
            </button>
        </div>
    );
}

export default Header;