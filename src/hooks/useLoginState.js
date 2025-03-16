import { useState, useEffect } from 'react';

const useLoginState = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('isLoggedIn') === 'true';
    });
    const [users, setUsers] = useState(() => {
        const storedUsers = localStorage.getItem('users');
        return storedUsers ? JSON.parse(storedUsers) : [];
    });

    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === 'isLoggedIn') {
                setIsLoggedIn(e.newValue === 'true');
            } else if (e.key === 'users') {
                setUsers(JSON.parse(e.newValue));
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const register = (email, password) => {
        const existingUser = users.find((user) => user.email === email);
        if (existingUser) {
            throw new Error('Пользователь с таким email уже существует');
        }

        const newUser = { email, password };
        setUsers([...users, newUser]);
        localStorage.setItem('users', JSON.stringify([...users, newUser]));
    };

    const login = (email, password) => {
        const user = users.find((user) => user.email === email && user.password === password);
        if (!user) {
            throw new Error('Неправильный email или пароль');
        }

        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
        window.dispatchEvent(new Event('storage'));
    };

    const logout = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        window.dispatchEvent(new Event('storage'));
    };

    return { isLoggedIn, login, logout, register, users };
};

export default useLoginState;
