
import './App.css';

import React, {useState } from 'react'
import FormInput  from './components/FormInput';

const App = () => {
  const[values,setValues]=useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    comfirmPassword:"",
  });
  const inputs=[
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      errorMessage:"Username should be 3-16 characters and shouldn t include any special characters",
      label:"Username",
      pattern:"^[A-Za-z0-9]{3,16}$",//only letters regex code
      required:true,
    },
    
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"",
      label:"Email",
      required:true,
    },
    {
      id:3,
      name:"birthday",
      type:"date",
      placeholder:"Birthday",
      errorMessage:"",
      label:"Birthday",
    },
   
    {
      id:4,
      name:"password",
      type:"text",
      placeholder:"Password",
      errorMessage:"Password should be 8-20 characters and include at least 1 letter,1 number and 1 special character",
      label:"Password",
      pattern:`/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/`,
      required:true,
    },
    
    {
      id:5,
      name:"comfirmPassword",
      type:"text",
      placeholder:"ConfirmPassword",
      errorMessage:"Password don't match",
      label:"ConfirmPassword",
      pattern:values.password,
      required:true,
    },

  ]
  

 
  const handleSubmit =(e)=>{
    e.preventDefault();
    
  };

  const onChange = (e) =>{
    setValues({...values,[e.target.name]:e.target.value});
  }


  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input)=>(
          <FormInput 
          key={input.id} 
          {...input} 
          value={values[input.name]}
          onChange={onChange}
          />
        )
        )}
        <button>Submit</button>

      </form>
    </div>
  )
}

export default App