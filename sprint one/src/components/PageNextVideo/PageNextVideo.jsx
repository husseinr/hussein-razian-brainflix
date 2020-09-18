import React from 'react';
import './pageNextVideo.scss';
import TravelPro from '../../assets/Images/video-list-1.jpg';
import LesHouches from '../../assets/Images/video-list-2.jpg';
import TravelHealth from '../../assets/Images/video-list-3.jpg';
import CheapAirline from '../../assets/Images/video-list-4.jpg';
import RomanticBreak from '../../assets/Images/video-list-5.jpg';
import PerfectAccommodations from '../../assets/Images/video-list-6.jpg';
import CruisingDestination from '../../assets/Images/video-list-7.jpg';
import TrainTravel from '../../assets/Images/video-list-8.jpg';

// let upComingVideo = [

//     {
//         photo: TravelPro,
//         title: 'Become A Travel Pro In One Easy Lesson',
//         Author: 'Scotty Cranmer'
//     },

//     {
//         photo: LesHouches,
//         title: 'Les Houches The Hidden Gem Of The',
//         Author: 'Scotty Cranmer'
//     },

//     {
//         photo: TravelHealth,
//         title: 'Travel Health Useful Medical Information',
//         Author: 'Scotty Cranmer'
//     },

//     {
//         photo: CheapAirline,
//         title: 'Cheap Airline Tickets Great Ways To Save',
//         Author: 'Emily Harper'
//     },

//     {
//         photo: RomanticBreak,
//         title: 'Take A Romantic Break In A Boutique Hotel',
//         Author: 'Ethan Owen'
//     },

//     {
//         photo: PerfectAccommodations,
//         title: 'Choose The Perfect Accommodations',
//         Author: 'Lydia Perez'
//     },

//     {
//         photo: CruisingDestination,
//         title: 'Crusing Destination Ideas',
//         Author: 'Timothy Austin'
//     },

//     {
//         photo: TrainTravel,
//         title: 'Train Travel On Track For Safety',
//         Author: 'Scotty Cranmer'
//     },


// ]

// const upcomingVideos = (videos) => {

//     return (
//         <div className="next-video">
//             <img  className="next-video__photo" src={videos.photo}></img>
//             <div className="next-video-info">
//                 <p className="next-video-info__title">{videos.title}</p>
//                 <p className="next-video-info__author">{videos.Author}</p>
//             </div>
//         </div>
//     )
// }

// function PageNextVideo() {
//     const newVideos = upComingVideo.map((video) =>
//     upcomingVideos(video));
//     return <section className="next">
//             <h3 className="next__title">NEXT VIDEO</h3>
//         {newVideos}
//         </section>;
    
// }

// export default PageNextVideo;

//================================================ Using State

class PageNextVideo extends React.Component { 

    state = {
        upComingVideo: [

            {
                photo: TravelPro,
                title: 'Become A Travel Pro In One Easy Lesson',
                channel: 'Scotty Cranmer',
                id:'010',
            },
        
            {
                photo: LesHouches,
                title: 'Les Houches The Hidden Gem Of The',
                channel: 'Scotty Cranmer',
                id:'011',
            },
        
            {
                photo: TravelHealth,
                title: 'Travel Health Useful Medical Information',
                channel: 'Scotty Cranmer',
                id:'012',
            },
        
            {
                photo: CheapAirline,
                title: 'Cheap Airline Tickets Great Ways To Save',
                channel: 'Emily Harper',
                id:'013',
            },
        
            {
                photo: RomanticBreak,
                title: 'Take A Romantic Break In A Boutique Hotel',
                channel: 'Ethan Owen',
                id:'014',
            },
        
            {
                photo: PerfectAccommodations,
                title: 'Choose The Perfect Accommodations',
                channel: 'Lydia Perez',
                id:'015',
            },
        
            {
                photo: CruisingDestination,
                title: 'Crusing Destination Ideas',
                channel: 'Timothy Austin',
                id:'016',
            },
        
            {
                photo: TrainTravel,
                title: 'Train Travel On Track For Safety',
                channel: 'Scotty Cranmer',
                id:'017',
            },
        ]
    }

    render() {

    return (
       this.state.upComingVideo.map(video => {
        return<div className="next-video" key={video.id}>
                <img  className="next-video__photo" src={video.photo}></img>
                <div className="next-video-info">
                    <p className="next-video-info__title">{video.title}</p>
                    <p className="next-video-info__channel">{video.channel}</p>
                </div>
            </div>
        })
    )
};
}

export default PageNextVideo;