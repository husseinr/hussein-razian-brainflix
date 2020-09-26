import React from 'react';
import './pageCurrentVideo.scss';
import PlayButton from '../../assets/Icons/SVG/Icon-play.svg'
import FullScreen from '../../assets/Icons/SVG/Icon-fullscreen.svg'
import VolumeButton from '../../assets/Icons/SVG/Icon-volume.svg'

function PageCurrentVideo (props) {
    return (
        <section key ={props.currentVideo.id} className="video">
            <div className="video__displayed">
                <video className="video__displayed-poster" poster={props.currentVideo.image}>
                
                </video>
            
                <div className="video__bar">
                    <div className="video__bar-play" >
                        <img  className="video__bar-play-button" src={PlayButton} alt="play-button"></img>
                    </div>

                    <div className="video__bar-scrubber">
                        <div className="video__bar-scrubber-progress">
                
                        </div>
                        <p className="video__bar-scrubber-time">{props.currentVideo.duration}</p>
                    </div>

                    <div className="video__bar-options">
                        <img className="video__bar-options-button video__bar-options-button-full " src={FullScreen} alt="full-screen-button"></img>
                        <img className="video__bar-options-button video__bar-options-button-volume" src={VolumeButton} alt="volume-button"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageCurrentVideo