import React, { useState, useEffect} from 'react';

const useAuthStatus = (props) => {
    const [auth, setAuth] = useState(null)
    useEffect(() => {
        setAuth(props)
    }, [])
    console.log(auth)
    return auth
};

export default useAuthStatus;