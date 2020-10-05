import React from 'react';
import {Link} from 'react-router-dom';
import './pageNextVideo.scss';



function PageNextVideo (props) {

    return (
        <div>
            <Link to={`/${props.id}`}  className="next-video">
                    <img  className="next-video__photo"
                    src={props.videoImage} 
                    alt={props.videoTitle}/>
     
                    
                    <div className="next-video-info">
                        <p className="next-video-info__title">
                            {props.videoTitle}</p>
                        <p className="next-video-info__channel">
                            {props.channelTitle}</p>
                    </div>
            </Link>
        </div>
    )
}

export default PageNextVideo;