import React from 'react';
import VideoPlaceholder from '../../assets/Images/video-list-0.jpg'
import PlayButton from '../../assets/Icons/SVG/Icon-play.svg'
import FullScreen from '../../assets/Icons/SVG/Icon-fullscreen.svg'
import VolumeButton from '../../assets/Icons/SVG/Icon-volume.svg'
import ViewIcon from '../../assets/Icons/SVG/Icon-views.svg'
import LikesIcon from '../../assets/Icons/SVG/Icon-likes.svg'
import './pageHero.scss';



function PageHero (props) {
    return (
        <section className="content">
            <video className="content__video" poster={props.videoPoster}>
           
            </video>

            <div className="content__icons">
                <div className="content__icons-play" >
                    <img  className="content__icons-play-button" src={PlayButton} alt="play-button"></img>
                </div>

                <div className="content__icons-scrubber">
                    <div className="content__icons-scrubber-progress">
                    
                    </div>
                </div>

                <div className="content__icons-options">
                    <img className="content__icons-options-button content__icons-options-button-full " src={FullScreen} alt="full-screen-button"></img>
                    <img className="content__icons-options-button content__icons-options-button-volume" src={VolumeButton} alt="volume-button"></img>
                </div>
            </div>

            <h1 className="content__title">{props.videoTitle}</h1>
            <div className="content__publisher">
                <p className="content__publisher-user">By {props.videoChannel}</p>
                <p className="content__publisher-date">{props.date}</p>
            </div>

            <div className="content__stats">
                <div className="content__stats-item">
                    <img className="content__stats-item-icon"  src={ViewIcon} alt="view-icon"></img>
                    <p>{props.videoViews}</p>
                </div>

                <div className="content__stats-item">
                    <img className="content__stats-item-icon"  src={LikesIcon} alt="likes-icon"></img>
                    <p>{props.videoLikes}</p>
                </div>
            </div>

            <p className="content__description">{props.videoDescription}</p>
        </section>
    )}

export default PageHero;