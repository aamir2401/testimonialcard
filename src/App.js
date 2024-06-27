import React from "react";
import reviews from "./data";
import Testimonials from "./Components/Testimonials";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] bg-gray-400"> 
          <div className="text-center">Our Testimonials</div>
          <div className="w-5 bg-violet"></div>
          <div className="item-center">
            <Testimonials reviews={reviews}/>
          </div>
    </div>
  );
};

export default App;
