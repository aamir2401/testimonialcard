import React, { useState } from "react";
import Card from '../Components/Card'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Testimonials = (props) =>
    {
            let reviews = props.reviews;
            const [index, setIndex] = useState(0)
            function leftBtnHandler()
            {
              if(index - 1 < 0)
                {
                  setIndex(reviews.length - 1)
                }
                else
                {
                  setIndex(index - 1)
                }
            }
            function rightBtnHandler()
            {
               if(index + 1 >= reviews.length)
                {
                   setIndex(0)
                }
            }
            function surprisBrnHandler()
            {
                    let randomIndex = Math.floor(Math.random() * reviews.length);
                    setIndex(randomIndex)
            }
            return(
            <div className="">
               <Card review={reviews[index]}/>
               

               <div>
                <button onClick={leftBtnHandler}>
                        <FaChevronLeft/>
                </button>
                <button onClick={leftBtnHandler}>
                        <FaChevronRight/>
                </button>
               </div>

                <div>
                <button onClick={surprisBrnHandler}>
                        surprise me
                </button>
                </div>
            </div>)
        
    }
    
    
    export default Testimonials;