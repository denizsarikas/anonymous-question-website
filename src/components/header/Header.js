import React from 'react'
import '../header/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faQuestionCircle, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
      <div className='left'>
        <FontAwesomeIcon icon={faQuestionCircle} />

      </div>
      <div className='center'>
        <span>Questions</span>
        <span>Answers</span>
      </div>
      <div className='right'>
        <div>
          <Link to="/login">
            Login
          </Link>
        </div>
        <div>
          <Link to="/register">
            Register
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