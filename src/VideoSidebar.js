import React, {useState} from 'react';
import './VideoSidebar.css' 
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
function SideFooter({likes,shares,messages}) {
    const [liked, setLiked] = useState(false);
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? (
                    <FavoriteIcon fontSize="large" 
                        onClick={ (e) => setLiked(false)}
                    />
                ): (
                    <FavoriteBorderIcon 
                        fontSize="large"
                        onClick={ (e) => setLiked(true)}
                    />
                )}                
                {/* <FavoriteIcon fontSize="large"/> */}
                {/* <p>100</p> */}
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon fontSize="large" />
                <p>{messages}</p>
                {/* <p>250</p> */}
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />  
                <p>{shares}</p>  
                {/* <p>12</p> */}
            </div>
        </div>
    )
}

export default SideFooter
