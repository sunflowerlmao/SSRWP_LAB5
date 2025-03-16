import React from 'react';
import { Link } from 'react-router-dom';

const FeedbackList = ({ feedbacks }) => {
    return (
        <div>
            <ul>
                {feedbacks.map((feedback, index) => (
                    <li key={index}>
                        <h3>{feedback.name}</h3>
                        <p>{feedback.message}</p>
                    </li>
                ))}
            </ul>
            <p><Link to="/">Оставить новый отзыв</Link></p>
        </div>
    );
};

export default FeedbackList;
