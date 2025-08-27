import React from 'react'
import { Routes, Route } from "react-router-dom";
import LoginForm from '../component/LoginForm';
import FrontPage from '../pages/FrontPage';
const MainRoute = () => {
    return (
        <div>

            <Routes>
                <Route path="/" element={<FrontPage/>}></Route>
                <Route path="/login" element={<LoginForm />}></Route>
            </Routes>

        </div>
    )
}

export default MainRoute
