import React, { useState , useEffect} from 'react'
import './../index.css'
import { useHistory } from "react-router-dom";
import data from './ADMIN_DATA.json';
import axios from "axios";


// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = 'X-CSRFToken'
// axios.defaults.withCredentials = true
// http://127.0.0.1:8000/users/login 
// export const client = axios.create({
//     baseURL: 'http://127.0.0.1:8000'
//     })

   


function Login(){
  const [email, setEmail]= useState("")
  const [password, setPassword] = useState("")
  const [inkorrect , setInkorrect] = useState(false)
  

  const history = useHistory();



//   const [login, setLogin] = useState({
//     email:email,
//     password:password
//   });

//   const url = "http://127.0.0.1:8000/users/login";

//   // data
//   const login1 = async () => {
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/users/login', {
//         email:email,
//     password:password
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error('AxiosError:', error);
//     }
//   };
  
//   // Call the login function
// //   login1();
//         client.post('/login')
//         .catch(err => { console.log(err) })

//         function login(email, password) {
//         client.post('/users/login/', {
//         email: email,
//         password: password,
//         })
// const login = async (e) => {
//     e.preventDefault();

        

//         try {
//             const response = await axios.post('http://127.0.0.1:8000/users/login', {
//               email: email,
//               password: password,
//             });
//             console.log(response)
      
//             // Assuming the server sends a token in the response
//             const token = response.data.token;
      
//             // Store the token in localStorage or a state management solution
//             localStorage.setItem('token', token);
      
//             // Redirect or perform any other actions upon successful login
//             console.log('Login successful!');
//           } catch (error) {
//             console.error('Login error:', error);
//             // Handle login error (e.g., display error message)
//           }
//         };
// const login = async () => {
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/users/login', {
//         email: 'user@example.com',
//         password: 'password123',
//       }, {
//         withCredentials: true,
//       });
  
//       // Handle the response
//       console.log(response.data);
//     } catch (error) {
//       console.error('AxiosError:', error);
//       // Handle error
//     }
//   };
  
  // Call the login function
//   login();
const login = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/users/login", {
        email: email,
        password: password,
      });

      // Assuming the server sends a token in the response
      const token = response.data.token;
    //   console.log("rs is"+response)
      // Store the token in localStorage or a state management solution
      localStorage.setItem('token', token);

      // Redirect or perform any other actions upon successful login
      console.log('Login successful!');
    } catch (error) {
      console.error('Login error:', error.response.data.detail);
      // Handle login error (e.g., display error message to the user)
    }

  };
   
  function log(e){
    e.preventDefault();
    const  role = data[0].role
  

    
    if (email === 'a'){
        
        history.replace(`/${role}`);  
    }else{
        setInkorrect(true);
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