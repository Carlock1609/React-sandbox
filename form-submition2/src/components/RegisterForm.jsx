import React, { useState } from 'react';

const RegisterForm = (props) => {
    const [form, setForm] = useState({ username: '', email: '', password: ''})

    const { username, email, password } = form

    const onChange = (e) => setForm({...form, [e.target.name]: e.target.value})
    console.log(form)
    return (
        <form className="RegisterForm" onSubmit={(e) => {
                        e.preventDefault();
                        props.onHandleSubmit(form)
                    }}>
            <input name="username" onChange={(e) => onChange(e)} value={username} type="text" placeholder="Username" />
            <input name="email" onChange={(e) => onChange(e)} value={email} type="email" placeholder="Email" />
            <input name="password" onChange={(e) => onChange(e)} value={password} type="password" placeholder="Password" />
            <button value="Submit" type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;