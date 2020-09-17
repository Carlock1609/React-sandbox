import React, { useState } from 'react';

import RegisterForm from './RegisterForm';

const Register = () => {
    const [register, setRegister] = useState([])

    const onHandleSubmit = (data) => {
        console.log(data)
        setRegister([])
        setRegister([data])
    };

    const displayForm = register.map((data) => {
        return (
            <div key={data.username}>
                <span>{data.username}</span>
                <span>{data.email}</span>{"   "}
                <span>{data.password}</span>
            </div>
        )
    })

    return (
        <div>
            <RegisterForm onHandleSubmit={onHandleSubmit} />
            {displayForm}
        </div>
    );
};

export default Register;