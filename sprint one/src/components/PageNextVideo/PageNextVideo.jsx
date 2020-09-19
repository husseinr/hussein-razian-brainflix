import React from 'react';
import './pageNextVideo.scss';

function PageNextVideo (props) {

    return (
        <div className="next-video">
            <img  className="next-video__photo"
             src={props.videoImage} 
             alt={props.photoAlt}>
             </img>
             
            <div className="next-video-info">
                <p className="next-video-info__title">
                    {props.videoTitle}</p>
                <p className="next-video-info__author">
                    {props.channelTitle}</p>
            </div>
        </div>
    )
}

export default PageNextVideo;