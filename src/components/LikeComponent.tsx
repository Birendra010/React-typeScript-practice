

import { useState } from 'react'
import { AiFillHeart,  } from 'react-icons/ai'

const LikeComponent = () => {
   const [like , setLike] = useState(false)

    const toggle = () => {
    setLike((prevLiked) => !prevLiked);
  };
  
    
    return (
    <div className="like-button" onClick={toggle}>
      <AiFillHeart color={like ? 'red' : 'gray' } size = {100} /> 
    </div>
  );

}

export default LikeComponent