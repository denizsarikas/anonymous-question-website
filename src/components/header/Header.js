import React from 'react'
import '../header/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faQuestionCircle, faRightFromBracket, faHandshake } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
      <div className='left'>
        <Link to="/" >
        <FontAwesomeIcon icon={faQuestionCircle} />
        </Link>

      </div>
      <div className='center'>
      <Link to="/" >
        Questions
        <FontAwesomeIcon icon={faHandshake} />
        Answers
      </Link>
      </div>
      <div className='right'>
        <div>
          <Link to="/login">
            Login
          </Link>
        </div>
        <div>
          <Link to="/register">
            Sign Up
          </Link>
        </div>
        <div>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </div>
      </div>
    </div>
  )
}

export default Header