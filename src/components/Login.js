import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
const [isSignedIn , setSignedIn] = useState(true)
    const toggleSignInForm =()=>{
        setSignedIn(!isSignedIn)

    }
  return (
    <div className=''>
    <Header/> 
    <div>
    <div className='absolute '>

<img src='https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg' alt='background'/>
</div>
<form className='p-10 bg-grey absolute  my-auto  w-3/12 mx-auto left-0 right-0  bottom-1/2 bg-black  '>
<h1 className='text-white'>{!isSignedIn?"signed Up":"signed IN"}</h1>
    {!isSignedIn?
        <input type='text' placeholder='full Name' className='p-2 m-2 w-full'/>
    :""}
    <input type='text' placeholder='Email Address' className='p-2 m-2 w-full' />
    <input type='password' placeholder='password' className='p-2 m-2 w-full' />
    <button className='bg-red p-2 m-2 text-red w-full'>{!isSignedIn?"signed Up":"signed IN"}</button>
    <p className='text-white' onClick={toggleSignInForm}>{!isSignedIn?"already a user ?":"new to netflix ?? sign up now"}</p>
</form>
    </div>
   


    </div>
  )
}

export default Login