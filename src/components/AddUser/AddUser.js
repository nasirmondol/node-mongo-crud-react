import React, {useRef} from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const handleSubmit = e =>{
        const name = nameRef.current.value;
        const email = emailRef.current.value;

        const newUser = {name, email};
        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Successfully added the user')
            }
            e.target.reset()
        })
        e.preventDefault()
    }

    return (
        <div>
            <h3>Please add an user</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={nameRef} />
                <br />
                <input type="email" name="" id="" ref={emailRef} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddUser;