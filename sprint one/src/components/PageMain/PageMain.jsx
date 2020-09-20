// import React from 'react';
// import PageHero from './components/PageHero/PageHero';
// import PageCommentsForm from './components/PageCommentsForm/PageCommentsForm';
// import CommentsDisplayed from './components/PageEnteredComments/PageEnteredComments';
// import PageNextVideo from './components/PageNextVideo/PageNextVideo';
// import TravelPro from './assets/Images/video-list-1.jpg';
// import LesHouches from './assets/Images/video-list-2.jpg';
// import TravelHealth from './assets/Images/video-list-3.jpg';
// import CheapAirline from './assets/Images/video-list-4.jpg';
// import RomanticBreak from './assets/Images/video-list-5.jpg';
// import PerfectAccommodations from './assets/Images/video-list-6.jpg';
// import CruisingDestination from './assets/Images/video-list-7.jpg';
// import TrainTravel from './assets/Images/video-list-8.jpg';


import PageHero from './components/PageHero/PageHero';
import PageCommentsForm from './components/PageCommentsForm/PageCommentsForm';
import CommentsDisplayed from './components/PageEnteredComments/PageEnteredComments';
import PageNextVideo from './components/PageNextVideo/PageNextVideo';

// function PageMain (props) {

//     return (
//         <main>
//             <section className="current-video">
//                 <PageHero />
//                 <PageCommentsForm />
//                 <CommentsDisplayed />
//             </section>
//             <aside className="next-video">
//                 <PageNextVideo />
//             </aside>
//         </main>
//     )
// }

// export default PageMain

// function PageMain(props) {
// <PageMain
// key={props.currentVideo.id} 
// videoPoster={props.currentVideo.image} 
// videoTitle={props.currentVideo.title} 
// videoChannel={props.currentVideo.channel} 
// date={props.currentVideo.timestamp} 
// videoViews={props.currentVideo.views} 
// videoLikes={props.currentVideo.likes} 
// videoDescription={props.currentVideo.description}

// {this.state.currentVideo.comments.map (entry => {
//     return 
//     key={entry.id} 
//     name={entry.name} 
//     date={entry.date} 
//     comment={entry.comment}
// )
// )
// }

// {this.state.upComingVideo.map (video => {
//     return 
//     key={video.id} 
//     videoID={video.id} 
//     videoTitle={video.title} 
//     channelTitle={video.channel} 
//     videoImage={video.image} 
//     photoAlt={video.alt}
//   })}
    
//     />

// }

// { <PageMain
// key={this.state.currentVideo.id} 
// videoPoster={this.state.currentVideo.image} 
// videoTitle={this.state.currentVideo.title} 
// videoChannel={this.state.currentVideo.channel} 
// date={this.state.currentVideo.timestamp} 
// videoViews={this.state.currentVideo.views} 
// videoLikes={this.state.currentVideo.likes} 
// videoDescription={this.state.currentVideo.description}

// {this.state.currentVideo.comments.map (entry => {
//     return 
//     key={entry.id} 
//     name={entry.name} 
//     date={entry.date} 
//     comment={entry.comment}
//         }
//     )
// }

// {this.state.upComingVideo.map (video => {
//     return 
//     key={video.id} 
//     videoID={video.id} 
//     videoTitle={video.title} 
//     channelTitle={video.channel} 
//     videoImage={video.image} 
//     photoAlt={video.alt}
//         }
//     )
// }
// />}

function PageMain () {

    return (
        <main>
            <PageHero />
            <PageCommentsForm />
            <CommentsDisplayed />
            <PageNextVideo />
        </main>
    )
}