import '../register/Register.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter,faGoogle} from '@fortawesome/free-brands-svg-icons'
import {faUser,faEnvelope,faKey} from '@fortawesome/free-solid-svg-icons'

const Register = () => {
  return (
    <div className='register'>
      <form >

        <div className='form-row'>
          <label>
            <span>
            <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
            E-mail
            </span>
            <input
              className='p-2 border border-gray-300 rounded'
              placeholder='Your email here'
              required
              type="email"
            />
          </label>
        </div>
        <div className='form-row'>
          <label>
            <span>
            <FontAwesomeIcon icon={faUser} className='mr-2' />
              Username
            </span>
            <input
              className='p-2 border border-gray-300 rounded'
              placeholder='Answerer name here'
              required
              type="text"
            />
          </label>
        </div>
        <div className='form-row'>
          <label>
            <span>
            <FontAwesomeIcon icon={faKey} className='mr-2' />
              Password
            </span>
            <input
              className='p-2 border border-gray-300 rounded'
              placeholder='******'
              required
              type="password"
            />
          </label>
        </div>
        <button className='button'> Sign Up </button>
      </form>
      <div className='mt-10'>
        You can login with below
        <div>
          <FontAwesomeIcon icon={faTwitter} />
          <span />
          <FontAwesomeIcon icon={faGoogle} />
        </div>
      </div>
    </div>
  )
}

export default Register