import '../login/Login.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter,faGoogle} from '@fortawesome/free-brands-svg-icons'
import {faUser,faKey} from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    return (
        <div>
            <form >
                <div>
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
                <div className='mt-2'>
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
                <button className='button'> Login </button>
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

export default Login