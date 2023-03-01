import '../login/Login.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faGoogle,
    faYoutube,
    faSkype,
} from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
} from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    return (
        <div>
            <form >
                <div>
                    <label>
                        <span>Username</span>
                        <input
                            className='p-2 border border-gray-300 rounded'
                            placeholder='answerer name here'
                            required
                            type="email"
                        />
                    </label>
                </div>
                <div className='mt-2'>
                    <label>
                        <span>Password</span>
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
                <FontAwesomeIcon icon={ faTwitter} />
                <span/>
                <FontAwesomeIcon icon={ faGoogle} />
                </div>
                
            </div>
        </div>
    )
}

export default Login