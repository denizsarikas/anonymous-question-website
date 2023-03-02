import React from 'react'
import "../home/Home.css"
import MyCarousel from '../../components/slick/MyCarousel.js'
import Answers from '../../components/answers/Answers'

const Home = () => {
  return (
    <div>
      <div className='m-10'>
        <MyCarousel />
      </div>
      <div>
        <Answers />
      </div>
    </div>
  )
}

export default Home