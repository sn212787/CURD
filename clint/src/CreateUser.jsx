import React, { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUser(){
const [name, setName] = useState()
const [email, setEmail] = useState()
const [age, setAge] = useState()

const navigate = useNavigate()


const Submit = (e) => {
    e.preventDefault();
    axios.post("https://localhost:5001/createUser", {name, email, age})
    .then(result => {
        console.log(result)
        navigate('/')
})
    .catch(err => console.log(err))
}

    return(

        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center align-content-start">
            <form className="form-group" onSubmit={Submit}>
                <h2 className="text-align-center">Add User</h2>
                    <div className="mb-2 form-group">
                        <label htmlFor="" className="d-flex align-self-start">Name</label>
                            <input type="text" placeholder="Enter Your Name" className="form-control"  onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                         <label htmlFor="" className="d-flex align-self-start">Email</label>
                             <input type="email" placeholder="Enter Your Email" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="" className="d-flex align-self-start">Age</label>
                             <input type="text" placeholder="Enter Your Age" className="form-control" onChange={(e) => setAge(e.target.value)}/>
                    </div>
           <button className="btn btn-success d-flex align-self-start">Submit</button>
           </form>
        </div>
    )

}


export default CreateUser