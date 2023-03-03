import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../questions/Questions.css"
import data from "../../data/cevaplanmamis.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {faTwitter,faGoogle,faYoutube,faSkype} from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const clickHandle = (e) => {
  console.log("you clicked me", e)
}



const Questions = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  const notAnswered = data.cevaplanmamis.map((item) => {
    return (
      <div className="questions-template" key={item.id}>

        <h1>{item.soru}</h1>
        <hr/>
          <div className="mt-5">
            <input
              type="text"
              required
              placeholder="cevabını buraya yaz"
            />
            <button onClick={ event => clickHandle(event.target.value)}>
            <FontAwesomeIcon icon={faPaperPlane} className ="ml-2" />
            </button>
          </div>
      </div>
    )
  })

  return (
    <div>
      <h2>Questions</h2>
      <Slider {...settings}>
        {notAnswered}
      </Slider>
    </div>
  );
};

export default Questions;
