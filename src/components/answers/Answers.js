import React from 'react'
import "../answers/Answers.css"
import data from "../../data/cevaplanmis.json"

const Answers = () => {

  const answers = data.cevaplanmis.map((item) => {
    return (
      <div className='templete' key={item.id}>
        <div>{item.soru}</div>
        <div>{item.cevap}</div>
        <div>{item.created_at} <span>Beğeni:{item.begeni}</span></div>
      </div>
    )
  })

  return (
    <div>
      <h1>Answers</h1>
      {answers}
    </div>
  )
}

export default Answers
