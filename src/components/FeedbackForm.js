import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const FeedbackForm = ({ setFeedbacks, feedbacks }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = useCallback(async (data) => {
        setFeedbacks([...feedbacks, data]);
        // Логика отправки отзыва
        console.log('Отзыв:', data);
    }, [feedbacks, setFeedbacks]);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} placeholder="Имя" />
                {errors.name && <div>Это поле обязательно</div>}
                <textarea {...register("message", { required: true })} placeholder="Сообщение" />
                {errors.message && <div>Это поле обязательно</div>}
                <button type="submit">Отправить</button>
            </form>
            <p><Link to="/feedbacks">Посмотреть все отзывы</Link></p>
        </div>
    );
};

export default FeedbackForm;
