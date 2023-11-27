import React, { useState } from 'react';
import './../index.css'


function Login(props){
  const [email, setEmail]= useState("")
  const [password, setPassword] = useState("")
  const [ink , setInk] = useState(false)

  function log(e){
    e.preventDefault()
    if (email != "asd"){
        setInk(true);
        setEmail("");
        setPassword("");
    }
  }

    return(<div>
        <div id='login-form'className='login-page'>
            <div className="form-box">
                <div className='button-box'>
                   <p>ADMIN</p>
                </div>
                <form id='login' className='input-group-login' >
                    <input type='text'className='input-field' value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                    }
                    } placeholder='Email Id' required />
		            <input type='password'className='input-field'value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                    }
                    } placeholder='Enter Password' required/>
		            <button type='submit'className='submit-btn' onClick={log}>Log in</button>
		         </form>
                 <span>{ink ? <div className='incorrect'><p>Incorrect email/password</p></div>:'' }</span>
            </div>
            
        </div>

    </div>)

}

export default Login