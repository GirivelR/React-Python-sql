import React, { useState } from "react";

import "./Main.css";
import Table from "../components/Table";

function Main() {
  const [error,setError]=useState();
  const [table,setTable]=useState();
    const Submit = (det) => {
        fetch("http://192.168.43.117:5000/values"
        , {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            details: det,
          }),
        })
          .then((res) => res.json())
          .then(values => {
            console.log(values);
            setError(values['value']);
          })
      };

    const Edit = (det) => {
        fetch("http://192.168.43.117:5000/edit"
        , {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            details: det,
          }),
        })
          .then((res) => res.json())
          .then(values => {
            console.log(values);
            setError(values['value']);
          })
      };
    const Delete = (det) => {
        fetch("http://192.168.43.117:5000/delete"
        , {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            details: det,
          }),
        })
          .then((res) => res.json())
          .then(values => {
            console.log(values);
            setError(values['value']);
          })
      };
    const Search = (det) => {
        fetch("http://192.168.43.117:5000/search"
        , {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            details: det,
          }),
        })
          .then((res) => res.json())
          .then(values => {
            console.log(values);
            setTable(values['value']);
          })
      };
    const Display = (det) => {
        fetch("http://192.168.43.117:5000/display"
        , {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            details: det,
          }),
        })
          .then((res) => res.json())
          .then(values => {
            console.log(values);
            setTable(values['value']);
          })
      };
      const [inputField , setInputField] = useState({
        first_name: '',
        last_name: '',
        gmail: '',
        course: '',
        dob:'',
        gender:'',
        be:'',
        me:'',
        phd:'',

    })

    const inputsHandler = (e) =>{
        setInputField({ ...inputField, [e.target.name]: e.target.value })
    }

    const submitButton = () =>{
        Submit(inputField)
    }
    const EditButton = () =>{
        Edit(inputField)
    }
    const DeleteButton = () =>{
        Delete(inputField.gmail)
    }
    const SearchButton = () =>{
        Search(inputField)
    }
    const DisplayButton = () =>{
        Display(inputField)
    }

    return (
      <>
        <div className='headContainer'>
          <div className='container'>
          <div className='child'>
            {error && <h4>{error}</h4>}
          <h5>Mail</h5>
            <input 
            type="email" 
            className="inputtext"
            name="gmail" 
            onChange={inputsHandler} 
            placeholder="Enter your Mail" 
            value={inputField.gmail}/>
            <h5>First Name</h5>
            <input 
            type="text" 
            className="inputtext"
            name="first_name" 
            onChange={inputsHandler} 
            placeholder="Enter your First Name" 
            value={inputField.first_name}/>

            <br/>
            <h5>Last Name</h5>
            <input 
            type="text" 
            className="inputtext"
            name="last_name" 
            onChange={inputsHandler} 
            placeholder="Enter your Last Name" 
            value={inputField.last_name}/>

            <br/>
                <h5>Gender</h5>
            <div className="checkbox">
              <input type="radio" className="inputcheck" name="gender" value='male' onChange={inputsHandler}/>
              <label >Male</label>
              <input type="radio" className="inputcheck" name="gender" value='female' onChange={inputsHandler}/>
              <label >Female</label>
              <input type="radio" className="inputcheck" name="gender" value='other' onChange={inputsHandler}/>
              <label >Other</label>
            </div>
          
            <div className="select">
              <label> 
                <h5>Select your course:</h5>
                <select name="course" value={inputField.course} onChange={inputsHandler}>
                  <option value="Select">Select your course</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Electrical and Electronic Engineering">Electrical and Electronic Engineering</option>
                </select>
              </label>
            </div>
            <h5>Degree</h5>
            <div className="checkbox">
              <input type="checkbox" className="inputcheck" name="be" value='Bachelor of Engineering' onChange={inputsHandler}/>
              <label > Bachelor of Engineering</label>
              <input type="checkbox" className="inputcheck" name="me" value="Master of Engineering" onChange={inputsHandler}/>
              <label > Master of Engineering</label>
                <input type="checkbox" className="inputcheck" name="phd" value='Doctor of Philosophy' onChange={inputsHandler}/>
              <label > Doctor of Philosophy</label>
            </div>
          <h5>Address</h5>
          <input 
            type="text" 
            className="inputtext"
            name="dob" 
            onChange={inputsHandler} 
            placeholder="Enter your Address" 
            value={inputField.dob}/>
          <div className="button" ><button onClick={submitButton}>Submit</button></div>
          <h5>In the above column fill the content you want to edit and leave the remails.It edit based on your Email</h5>
          <div className="button" ><button onClick={EditButton}> Edit </button></div>
          <h5>If you want to delete your account enter the email in the mail box and hit delete</h5>
          <div className="button" ><button onClick={DeleteButton}>Delete</button></div>
          <h5>Enter the first name and last name in the above and click Search</h5>
          <div className="button" ><button onClick={SearchButton}>Search</button></div>
          <h5>Display all data</h5>
          <div className="button" ><button onClick={DisplayButton}>Display</button></div>
          <div className="tablebox">
            {table && <Table data={table}/>}
            {table===0 && <h4>No data found</h4>}
          </div>
          </div>
        </div>
        </div>
      </>
    )
}

export default Main;
