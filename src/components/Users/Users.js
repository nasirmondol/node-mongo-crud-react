import React,{ useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Users = () => { 
    const [users, setUsers] = useState([]);
    console.log(users)
    useEffect(() =>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data =>setUsers(data))
    }, []);


    // DELETE AN USER
    const handleDeletedUser = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
           if(data.deletedCount > 0){
            alert('Deleted successfully');
            const remainingUsers = users.filter(user => user._id !== id)
            setUsers(remainingUsers)
           }
        })
        }
    }
    return (
        <div>
            <h3>{users.length}</h3>
            {
                users.map(user => <li key={user._id}
                > {user.name}: {user.email}<button onClick={() => handleDeletedUser(user._id)}>X</button> <Link to={`/users/update/${user._id}`}><button>Update</button></Link></li>)
            }
        </div>
    );
};

export default Users;