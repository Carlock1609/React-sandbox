import React, { useState } from 'react';

import useAuthStatus from '../hooks/useAuthStatus';

const Auth = () => {
    const [auth, setAuth] = useState(false)

    const isAuth = useAuthStatus(auth)

    const handleAuth = () => {
        (!auth) ? setAuth(true) : setAuth(false);
        console.log(auth)
    };

    return (
        <div>
            <button onClick={() => {handleAuth()}}>Click me</button>
            <h1>
            {auth}
            </h1>
            {!auth ? 
            <h1>NOT AUTHED</h1>
            :
            <h1>AUTHED</h1>    
            }
            {!isAuth ? 
            <h1>CUSOTMHOOK TRUE</h1> :
            <h1>CUSOM HOOK NOT TRUE</h1>   
            }
          
        </div>
    );
};

export default Auth;