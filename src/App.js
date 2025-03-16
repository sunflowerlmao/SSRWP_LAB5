import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import UserProfile from './components/UserProfile';
import useLoginState from './hooks/useLoginState';

const App = () => {
    const { isLoggedIn } = useLoginState();
    const [feedbacks, setFeedbacks] = useState([]);

    return (
        <BrowserRouter>
            <Routes>
                {!isLoggedIn ? (
                    <>
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/register" element={<RegisterForm />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<FeedbackForm setFeedbacks={setFeedbacks} feedbacks={feedbacks} />} />
                        <Route path="/feedbacks" element={<FeedbackList feedbacks={feedbacks} />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </>
                )}
            </Routes>
            {isLoggedIn && <UserProfile />}
        </BrowserRouter>
    );
};

export default App;
