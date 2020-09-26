import React from 'react';
import {Link} from 'react-router-dom';
import './pageNextVideo.scss';

function PageNextVideo (props) {

    return (
        <div className="next-video">
            <Link to={`/${props.id}`} >
                <div  >
                    <img  className="next-video__photo"
                    src={props.videoImage} 
                    alt={props.videoTitle}>
                    </img>
                    
                    <div className="next-video-info">
                        <p className="next-video-info__title">
                            {props.videoTitle}</p>
                        <p className="next-video-info__channel">
                            {props.channelTitle}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PageNextVideo;