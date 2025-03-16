import React from 'react';
import useLoginState from '../hooks/useLoginState';

const UserProfile = () => {
    const { logout } = useLoginState();

    return (
        <div style={{ position: 'absolute', top: 10, right: 10 }}>
            <button onClick={logout}>Выйти</button>
        </div>
    );
};

export default UserProfile;
