import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [formdata, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handelChange = (e) => {
        setFormData({
            ...formdata,  //n
            [e.target.name]: e.target.value
        })
        console.log(formdata);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const response = axios.post("localhost::5000//api/user/postregrister", formdata);
        console.log(response.data);
        setFormData({
            name: "",
            email: "",
            password: ""
        })
    }
    return (
        <div>
            <h1>Regrister</h1>
            <form action="" onSubmit={handleSubmit} method='post'>
                <input type="text" placeholder='name' name="name" value={formdata.name} onChange={handelChange} />

                <input type="email" placeholder='email' name="email" value={formdata.email} onChange={handelChange} />
                <input type="password" placeholder='password' name="password" value={formdata.password} onChange={handelChange} />
                <input type="button" name='submit' value="submit" />
            </form>
        </div>
    )
}

export default LoginForm
