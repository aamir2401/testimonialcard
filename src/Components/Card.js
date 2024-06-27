import React from 'react'
import { FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
function Card(props) {
    let review = props.review
  return (
   <div className=''>
        <div className=''>
            <img  className=''src={review.image}/>
            <div ></div>

            <p>{review.name}</p>
        </div>

        <div>
            <p>{review.job}</p>
        </div>

        <div>
             <FaQuoteLeft/>
        </div>

        <div>
            <p>{review.text}</p>
        </div>

        <div>
             <FaQuoteRight/>
        </div>

        
   </div>
  )
}

export default Card