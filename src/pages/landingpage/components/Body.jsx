import React from 'react'
import Card from './Card';
const Body = () => {
    const cards = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className='landing-body'>
    <div className='body'>
        {
            cards.map((card)=><Card/>)
        }
    </div>
    </div>
  )
}

export default Body