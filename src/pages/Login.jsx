import React, { useState , useEffect} from 'react'
import './../index.css'
import { useHistory } from "react-router-dom";
import data from './ADMIN_DATA.json';
import axios from "axios";
import { jwtDecode } from "jwt-decode";



// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = 'X-CSRFToken'
// axios.defaults.withCredentials = true
// http://127.0.0.1:8000/users/login 
// export const client = axios.create({
//     baseURL: 'http://127.0.0.1:8000'
// { "email": "adam1@mail.com", "password": "Pass1234!" }
//     })

   


function Login(){
  const [email, setEmail]= useState("")
  const [password, setPassword] = useState("")
  const [inkorrect , setInkorrect] = useState(false)
  

  const history = useHistory();


    const login = async (e) => {
        e.preventDefault();

        try {
        const response = await axios.post("http://127.0.0.1:8000/users/login", {
            email: email,
            password: password,
        });


        const token = response.data.token;
        const user = response.data.user
        
        localStorage.setItem('token', token);
        

        // DRIVER = 'DR'
        // ADMIN = 'AD'
        // FUELER = 'FL'
        // console.log(user);
        // MAINTENANCE = 'MN'
            if (user.role === 'DR'){
                history.push({ pathname :'/driver', state : user,
                    })
            }else if(user.role === 'AD'){
                history.replace(`/admin`);
            }else if(user.role === 'FL'){
                history.replace(`/fueling`);
            }else if(user.role === 'MN'){
                history.replace(`/maintence`);
            }
            

   
        
        } catch (error) {
        console.error('Login error:', error.response.data.detail);
        setInkorrect(true);
        setEmail("");
        setPassword("");

        }

    };
   

    return(<div>
        <div id='login-form'className='login-page'>
            <div className="form-box">
                <div className='button-box'>
                   <p>ADMIN</p>
                </div>
                <form id='login' className='input-group-login' onSubmit={login}>
                    <input type='text'className='input-field' value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                    }
                    } placeholder='Email Id' required />
		            <input type='password'className='input-field'value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                    }
                    } placeholder='Enter Password' required/>
		            <button type='submit'className='submit-btn' >Log in</button>
		         </form>
                 <span>{inkorrect ? <div className='incorrect'><p>Incorrect email/password</p></div>:'' }</span>
            </div>
            
        </div>

    </div>)

}

export default Login