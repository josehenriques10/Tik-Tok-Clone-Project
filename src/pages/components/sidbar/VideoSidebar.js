import React, { useState} from 'react'
import './videoSidebar.css'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';


function VideoSidebar({likes, messages, shares}) {

    const [liked, setliked]= useState(false)

    function handdlelike(){
        setliked(!liked)
    }

  return (
    <div className='videoSidebar'>
        <div className='videoSidebar__options'
            onClick={handdlelike}
        >
            {liked ? <FavoriteSharpIcon fontSize='large'/> : <FavoriteBorderSharpIcon fontSize='large'/> }
            <p>{liked ? Number(likes) + 1 : likes}</p>
        </div>
        <div className='videoSidebar__options'>
            <SmsRoundedIcon fontSize='large'/>
            <p>{messages}</p>
        </div>
        <div className='videoSidebar__options'>
            <ShareSharpIcon fontSize='large'/>
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSidebar