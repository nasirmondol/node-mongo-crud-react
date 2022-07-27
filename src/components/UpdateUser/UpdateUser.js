import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

const UpdateUser = () => {
    const [user, setUser] = useState({})
    const {id} = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:5000/users/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])
    
    return (
        <div>
            <h4>update user: {user.name}</h4>
            <h4>update email: {user.email}</h4>
            <p><small>{id}</small></p>
        </div>
    );
};

export default UpdateUser;