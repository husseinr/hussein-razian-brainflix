import React from 'react';
import ViewIcon from '../../assets/Icons/SVG/Icon-views.svg'
import LikesIcon from '../../assets/Icons/SVG/Icon-likes.svg'
import './pageVideoContent.scss';



function PageVideoContent (props) {
    let actualDate = new Date(props.currentVideo.timestamp); 
    return (
        <section className="content" key={props.currentVideo.id}>
            
            <h1 className="content__title">{props.currentVideo.title}</h1>

            <div className="content__info">
                <div className="content__info-channel">
                    <p className="content__info-channel-name">By {props.currentVideo.channel}</p>
                    <p className="content__info-channel-date">{actualDate.toLocaleDateString()}</p>
                </div>

                <div className="content__info-stats">
                    <div className="content__info-stats-item">
                        <img className="content__info-stats-item-icon"  src={ViewIcon} alt="view-icon"></img>
                        <p>{props.currentVideo.views}</p>
                    </div>

                    <div className="content__info-stats-item">
                        <img className="content__info-stats-item-icon"  src={LikesIcon} alt="likes-icon"></img>
                        <p>{props.currentVideo.likes}</p>
                    </div>
                </div>
            </div>

            <p className="content__description">{props.currentVideo.description}</p>
        </section>
    )}

export default PageVideoContent;