import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
function UpdateUser(){
    const {id} = useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:5001/getUser/' +id)
        .then(result => {
             setName(result.data.name)
             setEmail(result.data.email)
             setAge(result.data.age)
        })
        .catch(err => console.log(err))
      }, []) 
const Update = (e) => {
    e.preventDefault();
    axios.put("https://localhost:5001/updateUser" +id , {name, email, age})
    .then(result => {
        console.log(result)
        navigate('/')
    })
    .catch(err => console.log("Error error",err))
}
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <form onSubmit={Update}>
        <h2>Update Information</h2>
        <div className="mb-3">
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Enter Your Name" className="form-control" 
        value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Enter Your Email" className="form-control" 
        value={email}  onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
        <label htmlFor="">Age</label>
        <input type="text" placeholder="Enter Your Age" className="form-control" 
        value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <button className="btn btn-success">Update</button>
        </form>
        </div>
    )

}


export default UpdateUser