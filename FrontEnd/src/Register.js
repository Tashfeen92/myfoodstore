import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginStyles.css'

// const previusData = JSON.parse(localStorage.getItem('userInfo' || '[]'));
// const [data, setData] = useState([previusData]);
const Signup = () => {
  const history = useNavigate();
  const [credentials, setCredentials] = useState({ firstName: "", lastName: "", email: "", phone: "", password: "" });
  const getData = (e) => {
    const { value, name } = e.target;
    setCredentials(() => {
      return {
        ...credentials,
        [name]: value
      }
    })
  }
  const storeData = async (e) => {
    e.preventDefault();

    // credentials: 'include',
    // Origin:"http://localhost:3000/login",
    const response = await fetch("http://localhost:8080/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName: credentials.firstName, lastName: credentials.lastName, email: credentials.email, phone: credentials.phone, password: credentials.password })
    });

    const json = await response.json()
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials")
    }
    else {
      alert("User registered.");
      history('/login');
    }
  }

  return (
    <div className='login-container'>
      <form>
        {/* <form onSubmit={handleSubmit}> check values if error */}
        <h2>Welcome!</h2>
        <input type='text' name='firstName' value={credentials.firstName} onChange={getData} placeholder='First Name' />
        <input type='text' name='lastName' value={credentials.lastName} onChange={getData} placeholder='Last Name' />
        <input type='email' name='email' value={credentials.email} onChange={getData} placeholder='Email' />
        <input type='text' name='phone' value={credentials.phone} onChange={getData} placeholder='Phone' />
        <input type='password' name='password' value={credentials.password} onChange={getData} placeholder='Password' />
        <button className='btn-signup1' onClick={storeData} type='submit'>Sign up</button>
      </form>
    </div>
  )
}
export default Signup