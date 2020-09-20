import React from 'react';
import ViewIcon from '../../assets/Icons/SVG/Icon-views.svg'
import LikesIcon from '../../assets/Icons/SVG/Icon-likes.svg'
import './pageVideoContent.scss';



function PageVideoContent (props) {
    return (
        <section className="content">
            
            <h1 className="content__title">{props.videoTitle}</h1>

            <div className="content__info">
                <div className="content__info-channel">
                    <p className="content__info-channel-name">By {props.videoChannel}</p>
                    <p className="content__info-channel-date">{props.date}</p>
                </div>

                <div className="content__info-stats">
                    <div className="content__info-stats-item">
                        <img className="content__info-stats-item-icon"  src={ViewIcon} alt="view-icon"></img>
                        <p>{props.videoViews}</p>
                    </div>

                    <div className="content__info-stats-item">
                        <img className="content__info-stats-item-icon"  src={LikesIcon} alt="likes-icon"></img>
                        <p>{props.videoLikes}</p>
                    </div>
                </div>
            </div>

            <p className="content__description">{props.videoDescription}</p>
        </section>
    )}

export default PageVideoContent;