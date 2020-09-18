import React from 'react';
import VideoPlaceholder from '../../assets/Images/video-list-0.jpg'
import PlayButton from '../../assets/Icons/SVG/Icon-play.svg'
import FullScreen from '../../assets/Icons/SVG/Icon-fullscreen.svg'
import VolumeButton from '../../assets/Icons/SVG/Icon-volume.svg'
import ViewIcon from '../../assets/Icons/SVG/Icon-views.svg'
import LikesIcon from '../../assets/Icons/SVG/Icon-likes.svg'
import './pageHero.scss';



const PageHero = () => {
    return (
        <section className="content">
            <video className="content__video" poster={VideoPlaceholder}>
           
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

            <h1 className="content__title">BMX Rampage:2018 Highlights</h1>
            <div className="content__publisher">
                <p className="content__publisher-user">By Red Cow</p>
                <p className="content__publisher-date">12/18/2018</p>
            </div>

            <div className="content__stats">
                <div className="content__stats-item">
                    <img className="content__stats-item-icon"  src={ViewIcon} alt="view-icon"></img>
                    <p>1,001,023</p>
                </div>

                <div className="content__stats-item">
                    <img className="content__stats-item-icon"  src={LikesIcon} alt="likes-icon"></img>
                    <p>110,985</p>
                </div>
            </div>

            <p className="content__description">
            On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, 
            unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before 
            the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event 
            for the second time -- eight years after his first Red Cow Rampage title
            </p>
        </section>
    )}

export default PageHero;