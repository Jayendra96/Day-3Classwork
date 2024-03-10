import React from 'react';
import "./Main1.css";
import Button from './Button';

const Main1 = () => {
  return (
    <div className='main1'>
        <div className='adjust'> <div className='left-Section'>
      <h1>Let us find your <br /><span>Forever Food.</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
      <div className='buttons'> <Button borderRadius="6px" backgroundColor="rgb(190, 18, 60" fontColor="white">Search Now</Button>
      <Button borderRadius="6px" backgroundColor="white" fontColor="rgb(190, 18, 60">Know More</Button>
      </div>
    </div></div>
     
    </div>
  )
}

export default Main1;
