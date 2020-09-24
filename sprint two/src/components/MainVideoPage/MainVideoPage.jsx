import React from 'react';
import axios from 'axios';
import * as uid from 'uniqid';
import VideoPlaceholder from '../..//assets/Images/video-list-0.jpg';
import TravelPro from '../../assets/Images/video-list-1.jpg';
import LesHouches from '../../assets/Images/video-list-2.jpg';
import TravelHealth from '../../assets/Images/video-list-3.jpg';
import CheapAirline from '../../assets/Images/video-list-4.jpg';
import RomanticBreak from '../../assets/Images/video-list-5.jpg';
import PerfectAccommodations from '../../assets/Images/video-list-6.jpg';
import CruisingDestination from '../../assets/Images/video-list-7.jpg';
import TrainTravel from '../../assets/Images/video-list-8.jpg';
import PageCurrentVideo from '../PageCurrentVideo/PageCurrentVideo'
import PageVideoContent from '../PageVideoContent/PageVideoContent';
import PageCommentsForm from '../PageCommentsForm/PageCommentsForm';
import EnteredComments from '../PageEnteredComments/PageEnteredComments';
import PageNextVideo from '../PageNextVideo/PageNextVideo';


const url ="https://project-2-api.herokuapp.com/videos/?api_key=";
let api_key="33e84b73-0d50-49bb-aead-1fff87462673";



class MainVideoPage extends React.Component {
  state = {
      videos: []
    //   {
    //     id: uid(),
    //     title: 'BMX Rampage: 2018 Highlights',
    //     description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
    //     channel: 'Red Cow',
    //     image: VideoPlaceholder,
    //     views: '1,001,023',
    //     likes: '110,985',
    //     duration: '0:00/0:42',
    //     video: 'video',
    //     timestamp: '12/18/2018',
    //     comments: 
    //     [
    //       {
    //           name: "Michael Lyons",
    //           date: "12/18/2018",
    //           comment:`They BLEW the ROOF off at their
    //           last show, once everyone started
    //           figuring out they were going. This is
    //           still simply the greatest opening of a
    //           concert I have EVER witnessed.`,
    //           id: uid()
    //       },
          
    //       {
    //           name: "Gary Wong",
    //           date: "12/12/2018",
    //           comment:`Every time I see him shred I feel so
    //           motivated to get off my couch and
    //           hop on my board. He’s so talented! I
    //           wish I can ride like him one day so I
    //           can really enjoy myself!`,
    //           id: uid()
    //       },
      
    //       {
    //           name: "Theodore Duncan",
    //           date: "11/15/2018",
    //           comment:`How can someone be so good!!!
    //           You can tell he lives for this and
    //           loves to do it every day. Everytime I
    //           see him I feel instantly happy! He’s
    //           definitely my favorite ever!`,
    //           id: uid()
    //       },
    //     ],
    //   },    
            
    //   upComingVideo: [

    //       {
    //           image: TravelPro,
    //           alt: 'travel-photo',
    //           title: 'Become A Travel Pro In One Easy Lesson',
    //           channel: 'Scotty Cranmer',
    //           id: uid(),
    //       },
      
    //       {
    //           image: LesHouches,
    //           alt: 'les-houches-photo',
    //           title: 'Les Houches The Hidden Gem Of The',
    //           channel: 'Scotty Cranmer',
    //           id: uid(),
    //       },
      
    //       {
    //           image: TravelHealth,
    //           alt: 'health-photo',
    //           title: 'Travel Health Useful Medical Information',
    //           channel: 'Scotty Cranmer',
    //           id: uid(),
    //       },
      
    //       {
    //           image: CheapAirline,
    //           alt: 'airline-photo',
    //           title: 'Cheap Airline Tickets Great Ways To Save',
    //           channel: 'Emily Harper',
    //           id: uid(),
    //       },
      
    //       {
    //           image: RomanticBreak,
    //           alt: 'romantic-photo',
    //           title: 'Take A Romantic Break In A Boutique Hotel',
    //           channel: 'Ethan Owen',
    //           id: uid(),
    //       },
      
    //       {
    //           image: PerfectAccommodations,
    //           alt: 'accommodations-photo',
    //           title: 'Choose The Perfect Accommodations',
    //           channel: 'Lydia Perez',
    //           id: uid(),
    //       },
      
    //       {
    //           image: CruisingDestination,
    //           alt: 'cruise-photo',
    //           title: 'Crusing Destination Ideas',
    //           channel: 'Timothy Austin',
    //           id: uid(),
    //       },
      
    //       {
    //           image: TrainTravel,
    //           alt: 'train-photo',
    //           title: 'Train Travel On Track For Safety',
    //           channel: 'Scotty Cranmer',
    //           id: uid(),
    //       },
    //   ],
    };

    componentDidMount() {
        axios
        .get (url+api_key)
        .then(res=> {
            this.setState({
                videos: res.data
            })
        })
    }

    render()
    {
    return (
        <main>
          <PageCurrentVideo
          currentVideo={this.state.videos} />
            <section className="video-content">
              <div className="video-content__current">
                <PageVideoContent
                  currentVideo={this.state.videos} />
                <PageCommentsForm />
                  <section className="comment-entries">
                    {this.state.videos.map (video => {
                      return <EnteredComments 
                      key={video.id} 
                      name={video.name} 
                      date={video.date} 
                      comment={video.comment}/>
                    })}
                  </section>
              </div>
                <aside className="next">
                  <h3 className="next__header">NEXT VIDEO</h3>
                    {this.state.videos.map (video => {
                      return <PageNextVideo 
                      key={video.id} 
                      videoTitle={video.title} 
                      channelTitle={video.channel} 
                      videoImage={video.image} 
                      photoAlt={video.alt}/>
                    })}
                </aside>
            </section>
        </main>
    );
  };
};

export default MainVideoPage;