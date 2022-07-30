import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

const Users = () => { 
    const [users, setUsers] = useState([]);
    console.log(users)
    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);

    // Delete user
    const handleDeletebutton = id => {
        const process = window.confirm('Are you sure want to delete?');
        if(process){
            fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
            // headers: {
            //     'content-type': 'application/json'
            // },
            // body: JSON.stringify(users)
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Deleted successfully.');
                const remainingUsers = users.filter(user => user._id !== id)
                setUsers(remainingUsers)
            }
        })
        }
    }
    return (
        <div>
            <h3>This is user</h3>
            <ul>
                {
                    users.map(user => <li 
                    key={user._id}>
                    {user.name} : {user.email} <button onClick={() =>handleDeletebutton(user._id)}>X</button>
                    <Link to={`/users/update/${user._id}`}><button>Update</button></Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Users;