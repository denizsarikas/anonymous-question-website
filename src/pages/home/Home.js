import React from 'react'
import "../home/Home.css"
import Questions from '../../components/questions/Questions.js'
import Answers from '../../components/answers/Answers'

const Home = () => {
  return (
    <div>
      <div className='m-10'>
        <Questions />
      </div>
      <div>
        <Answers />
      </div>
    </div>
  )
}

export default Home