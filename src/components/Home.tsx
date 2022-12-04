import React from 'react'
import Generate from './Generate'
import Introduction from './Introduction'
import PassInfo from './PassInfo'

function Home() {
  return (
    <div>
        <Introduction />
        <Generate />
        <PassInfo />
    </div>
  )
}

export default Home