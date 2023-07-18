import React from 'react'
import WelcomeCard from './WelcomeCard'
import Info from './Info'
import Disclaimer from './Disclaimer'

function Feed() {
  return (
    <div className=' justify-center flex flex-col gap-4 mx-6 text-xs md:my-12 '>
      <WelcomeCard />
      <Info />
      <Disclaimer />
    </div>
  )
}

export default Feed
