import React from 'react'
import ques from '../assets/Question.svg';
import gps from '../assets/Gps_fixed.svg'
import InfoCard from './InfoCard'

function Info() {
  return (
    <div className='grid lg:grid-cols-3 md:mx-20 lg:gap-4 gap-2 mx-6 justify-center items-center '>
      <InfoCard image={ques} head={"Ask your medical queries"} paragraph={"I have severe headaches, cold and cough. What should I do?"} />
      <InfoCard image={ques} head={"Ask your medical queries"} paragraph={"I have severe headaches, cold and cough. What should I do?"} />
      <InfoCard image={gps} head={"Get specific results"} paragraph={"Get specific results to all your medical queries and cited sources to all the responses."} />
    </div>
  )
}

export default Info
