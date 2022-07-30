import React, { useState } from 'react'
import axios from 'axios'

function AddUser() {
    const [userName, setUserName] =  useState('')
    const [designation, setdesignation] =  useState('')
    const [place, setPlace] =  useState('')
    const [age, setAge] =  useState('')
    const [image, setImage] =  useState('')

    const onChangeUserName = (event) => {
        setUserName(event.target.value)
    }
    const onChangeDesignation = (event) => {
        setdesignation(event.target.value)
    }
        const onChangePlace = (event) => {
        setPlace(event.target.value)
    }
    const onChangeAge = (event) => {
        setAge(event.target.value)
    }
    const onChangeImage = (event) => {
        setImage(event.target.value)
    }

    const onSubmit = async () => {
        const userData = {
            userName,
            designation,
            place,
            age,
            image
        }
        await axios.post('http://localhost:5000/testAPI/addUser', {...userData})
                .then((res) => console.log(res))
    }
    return (
        <div className='d-flex justify-content-center row'>
            <div className="input-group mb-3 mt-5">
                <span className="input-group-text">User Name</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={onChangeUserName} value={userName} />
            </div>
            <div className="input-group mb-3 mt-5">
                <span className="input-group-text">Designation</span>
                <input type="text" className="form-control" placeholder="designation" aria-label="designation" aria-describedby="basic-addon1" onChange={onChangeDesignation} value={designation} />
            </div>
            <div className="input-group mb-3 mt-5">
                <span className="input-group-text">Place</span>
                <input type="text" className="form-control" placeholder="place" aria-label="place" aria-describedby="basic-addon1" onChange={onChangePlace} value={place} />
            </div>
            <div className="input-group mb-3 mt-5">
                <span className="input-group-text">Age</span>
                <input type="text" className="form-control" placeholder="image" aria-label="image" aria-describedby="basic-addon1" onChange={onChangeAge} value={age} />
            </div>
            <div className="input-group mb-3 mt-5">
                <span className="input-group-text">User Name</span>
                <input type="text" className="form-control" placeholder="image" aria-label="image" aria-describedby="basic-addon1" onChange={onChangeImage} value={image} />
            </div>
            <div>
                <button className='btn btn-primary' onClick={onSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default AddUser