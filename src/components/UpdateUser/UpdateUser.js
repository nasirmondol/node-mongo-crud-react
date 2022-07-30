import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'

const UpdateUser = () => {
    const [user, setUser] = useState({});

    const {id} = useParams();

    useEffect(() =>{
        fetch(`http://localhost:5000/users/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])
    // Update the user name and email
    const updateNameChange = e =>{
        const UpdateName = e.target.value;
        const updateUser = {name: UpdateName, email: user.email}
        setUser(updateUser)
    }

    const updateEmailChange = e =>{
        const updateEmail = e.target.value;
        const updateUser = {name: user.name, email: updateEmail};
        setUser(updateUser)
    }

    const handleSubmit = e =>{
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
           if(data.modifiedCount > 0){
            alert('Updated successfully')
            setUser({})
           }
        })
        e.preventDefault()

    }

    return (
        <div>
            <h3>{user.name}: {user.email}</h3>
            {/* <p>{user.name}: {user.email}</p> */}
            <p><small>{id}</small></p>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={updateNameChange} value={user.name || ''} />
                <input type="email" onChange={updateEmailChange}  name="" id="" value={user.email || ''} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;