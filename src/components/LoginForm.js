import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useLoginState from '../hooks/useLoginState';

const LoginForm = () => {
    const { register, handleSubmit } = useForm();
    const { login } = useLoginState();

    const onSubmit = async (data) => {
        try {
            await login(data.email, data.password);
            console.log('Вход успешен');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email", { required: true })} placeholder="Email" />
                <input {...register("password", { required: true })} type="password" placeholder="Пароль" />
                <button type="submit">Войти</button>
            </form>
            <p>Нет аккаунта? <Link to="/register">Зарегистрироваться</Link></p>
        </div>
    );
};

export default LoginForm;
