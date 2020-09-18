import React from 'react';
import VideoPlaceholder from '../../assets/Images/video-list-0.jpg'
import PlayButton from '../../assets/Icons/SVG/Icon-play.svg'
import FullScreen from '../../assets/Icons/SVG/Icon-fullscreen.svg'
import VolumeButton from '../../assets/Icons/SVG/Icon-volume.svg'
import ViewIcon from '../../assets/Icons/SVG/Icon-views.svg'
import LikesIcon from '../../assets/Icons/SVG/Icon-likes.svg'
import './pageHero.scss';

//Main Video Object
// const mainVideo = {
//     id: 'type of <string>',
//     title: 'type of <string>',
//     description: 'type of <string>',
//     channel: 'type of <string>',
//     image: 'type of <string>',
//     views: 'type of <string>',
//     likes: 'type of <string>',
//     duration: 'type of <string>',
//     video: 'type of <string>',
//     timestamp: 'type of <number>',
//     comments: 'type of <array>' 
// };

class PageCurrentVideo extends React.Component { 
state = currentVideo = {

    id: '020',
    title: 'BMC Rampage:2018 Highlights',
    description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
    channel: 'Red Cow',
    image: {VideoPlaceholder},
    views: '1,001,023',
    likes: '110,985',
    duration: 'type of <string>',
    video: 'type of <string>',
    timestamp: '4:00',
    comments: [

            {
                name: "Michael Lyons",
                date: "12/18/2018",
                comment:`They BLEW the ROOF off at their
                last show, once everyone started
                figuring out they were going. This is
                still simply the greatest opening of a
                concert I have EVER witnessed.`,
                id: '001'
            },
            
            {
                name: "Gary Wong",
                date: "12/12/2018",
                comment:`Every time I see him shred I feel so
                motivated to get off my couch and
                hop on my board. He’s so talented! I
                wish I can ride like him one day so I
                can really enjoy myself!`,
                id: '002'
            },
        
            {
                name: "Theodore Duncan",
                date: "11/15/2018",
                comment:`How can someone be so good!!!
                You can tell he lives for this and
                loves to do it every day. Everytime I
                see him I feel instantly happy! He’s
                definitely my favorite ever!`,
                id: '003'
            },    
        ] 
    };

        render() {

            return (
               this.state.currentVideo.map(video => {
                return<div className="next-video" key={video.id}>
                        <img  className="next-video__photo" src={video.image}></img>
                        <div className="next-video-info">
                            <p className="next-video-info__title">{video.title}</p>
                            <p className="next-video-info__channel">{video.channel}</p>
                        </div>
                    </div>
                })
            )
        };

    }


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