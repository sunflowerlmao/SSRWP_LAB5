import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useLoginState from '../hooks/useLoginState';

const RegisterForm = () => {
    const { register, handleSubmit } = useForm();
    const { register: registerUser } = useLoginState();

    const onSubmit = async (data) => {
        try {
            await registerUser(data.email, data.password);
            console.log('Регистрация успешна');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email", { required: true })} placeholder="Email" />
                <input {...register("password", { required: true })} type="password" placeholder="Пароль" />
                <button type="submit">Зарегистрироваться</button>
            </form>
            <p>Уже зарегистрированы? <Link to="/login">Войти</Link></p>
        </div>
    );
};

export default RegisterForm;
