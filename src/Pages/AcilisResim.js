import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';

const AcilisResim = () => {
    const navigate = useNavigate();
    return (
        <div>
            <img onClick={() => navigate("/login") } src="https://picsum.photos/id/237/1000/1000" alt="acilis"/>
        </div>
    );
};

export default AcilisResim;