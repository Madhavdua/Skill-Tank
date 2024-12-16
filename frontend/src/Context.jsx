import React from 'react'
import myContext from './CreateContext'
import Parent from './Pages/Parent'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

function Context() {

  const [loggedIn, setloggedIn] = useState(false);
  const [alert, setalert] = useState(false);
  const [msg, setmsg] = useState('');
  // const server = "http://127.0.0.1";
  const server = import.meta.env.VITE_SERVER;
  // console.log(server);
  const fakeDetails={
      username: 'johndoe',
      email: 'john.doe@example.com',
      password: '********'
    }
  const [payload, setpayload] = useState(fakeDetails)

  function decodeToken() {
    const token = localStorage.getItem('token');

    if (token) {
      setloggedIn(true);
      const decodedPayload = jwtDecode(token);
      decodedPayload.password="********";
      return decodedPayload;
    } else {
      setloggedIn(false);
      console.log("Token not found in local storage");
      return fakeDetails;
    }
  }

  useEffect(() => {
    setpayload(decodeToken);
  }, [loggedIn])

  function showAlert(message) {
    setalert(true);
    setmsg(message);
    setTimeout(() => {
      setalert(false);
      setmsg('');
    }, 2000);
  }


  async function login(email, password) {
    try {
      const response = await axios.post(`${server}/api/login`, {
        email,
        password,
      });
      if (response.data.authToken) {
        localStorage.setItem('token', response.data.authToken);
        setloggedIn(true);
        showAlert("Login Successfull");
      }
      return true;
    } catch (error) {
      const err = error.response.data.error;
      console.log(err)
      if (err) {
        showAlert(err)
      }
      else showAlert("Login Failed");
      return null;
    }
  }

  async function signUp(username, email, password) {
    try {
      const response = await axios.post(`${server}/api/createuser`, {
        username,
        email,
        password,
      });
      if (response.data.authToken) {
        localStorage.setItem('token', response.data.authToken);
        setloggedIn(true);
        showAlert("SignUp Successfull");
      }
      return true;
    } catch (error) {
      const err = error.response.data.error;
      console.log(err)
      if (err) {
        showAlert(err);
      }
      else showAlert("SignUp Failed");
      return null;
    }
  }
  async function edit(username,email) {
    try{
      const response = await axios.put(`${server}/api/edit/${payload.id}`, {
        username,
        email,
      });

      if (response.data.authToken) {
        localStorage.setItem('token', response.data.authToken);
        setpayload(decodeToken());
      }
      showAlert("Chnages made successfully")
      return true;
    } catch (error) {
      const err = error.response.data.error;
      console.log(err)
      if (err) {
        showAlert(err);
      }
      else showAlert("Cannot edit at the moment");
      return null;
    }
  }
  async function addSale(formData) {
    try {
      const response = await axios.post(`${server}/api/sales/add`, formData);
      showAlert("Entry added");
      return true;
    } catch (error) {
      showAlert("Error adding entry")
      return null;
    }
  }
  async function getSales() {
    try {
      const response = await axios.get(`${server}/api/sales`);
      return response.data;
    } catch (error) {
      console.error("Error fetching sales data:", error);
      return null;
    }
    
  }


  return (
    <myContext.Provider value={{ loggedIn, setloggedIn, login, alert, setalert, msg, setmsg, showAlert, signUp,payload,setpayload, decodeToken,edit,addSale ,getSales}}>
      <Parent />
    </myContext.Provider>
  )
}

export default Context