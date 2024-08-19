import React, {useState} from 'react'
import email_img from '/email.png'
import lock_img from '/lock.png'
import login_img from '/login.png'
import { useNavigate  } from 'react-router-dom';
import Message from './Message';
import './LoginCard.scss'

const LoginCard = (props) => {
  const [credential, setCredential] = useState({email: '', password: '', remember: true})
  const navigate = useNavigate()
  const handleSubmit = async (e)=>{
      e.preventDefault()
      if(credential.remember){
        // API Call
        const response = await fetch(`http://localhost:5000/api/auth/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: credential.email, password: credential.password})
        })
        const json = await response.json()
        if(json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken)
            navigate('/')
            props.showMessage("Logged in Successfully", "green")

        } else {
            props.showMessage("Invalid Credential", "red")
        }
      } else {
        props.showMessage("Please check 'Remember Me' checkbox", "red")
      }

  }

  const onChange = (e)=>{
    setCredential({...credential, [e.target.name]: e.target.value})
  }

  return (
    <section id='login-card'>
      <div className='card'>
        <form className='card-content' onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className='input-box'>
                <img src={email_img} alt="email" className='email-img' />
                <input type="email" required value={credential.email} onChange={onChange} placeholder='Enter email' name='email' />
            </div>
            
            <div className='input-box'>
                <img src={lock_img} alt="lock"className='lock-img' />
                <input type="password" required value={credential.password} onChange={onChange} placeholder='Enter password' name='password' />
            </div>
            <div className='checkbox-box'>
                <div>
                    <input type="checkbox" checked={credential.remember} onChange={onChange} name='remember' id='remember-check' />
                    <label htmlFor='remember-check'>Remember me</label>
                </div>
                <a href='#'>Forget Password</a>
            </div>
            <div className='text-center'>
                <button type='submit' className='rounded-30 bg-dark-green'>Submit</button>
                <Message message={props.message}/>
            </div>
            <div className='login-icon'>
                <img src={login_img} alt='login'/>
            </div>
        </form>
      </div>
    </section>
  )
}

export default LoginCard
