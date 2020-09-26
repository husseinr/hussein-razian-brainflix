import React from 'react';
import axios from 'axios';
import {Route, Switch, Link} from 'react-router-dom';
import PageCurrentVideo from '../PageCurrentVideo/PageCurrentVideo'
import PageVideoContent from '../PageVideoContent/PageVideoContent';
import PageCommentsForm from '../PageCommentsForm/PageCommentsForm';
import EnteredComments from '../PageEnteredComments/PageEnteredComments';
import PageNextVideo from '../PageNextVideo/PageNextVideo';


const url ="https://project-2-api.herokuapp.com/videos/?api_key=";
let api_key="33e84b73-0d50-49bb-aead-1fff87462673";



class MainVideoPage extends React.Component {
  state = {

    activeVideo: [
      {
        id: "1af0jruup5gu",
        title: 'BMX Rampage: 2018 Highlights',
        description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
        channel: 'Red Cow',
        image: 'https://i.imgur.com/l2Xfgpl.jpg',
        views: '1,001,023',
        likes: '110,985',
        duration: '0:00/0:42',
        video: 'video',
        timestamp: '12/18/2018',
        comments: 
        [
          {
              name: "Michael Lyons",
              date: "12/18/2018",
              comment:`They BLEW the ROOF off at their
              last show, once everyone started
              figuring out they were going. This is
              still simply the greatest opening of a
              concert I have EVER witnessed.`,
              id:"1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
          },
          
          {
              name: "Gary Wong",
              date: "12/12/2018",
              comment:`Every time I see him shred I feel so
              motivated to get off my couch and
              hop on my board. He’s so talented! I
              wish I can ride like him one day so I
              can really enjoy myself!`,
              id:"cc6f173d-9e9d-4501-918d-bc11f15a8e14",
          },
      
          {
              name: "Theodore Duncan",
              date: "11/15/2018",
              comment:`How can someone be so good!!!
              You can tell he lives for this and
              loves to do it every day. Everytime I
              see him I feel instantly happy! He’s
              definitely my favorite ever!`,
              id:"993f950f-df99-48e7-bd1e-d95003cc98f1",
          },
        ],
      },  

    ],

    videos: [],

    };

    

    componentDidMount() {
        axios
        .get (url+api_key)
        .then(res=> {
            this.setState({
                videos: res.data
            })
            console.log(res)
        })
        

        .catch(err=> {console.log(err)})
    }

    componentDidUpdate (prevProps, prevState) {
      const {match: {params}} = this.props;
      axios
      .get (`https://project-2-api.herokuapp.com/videos/${params.id}?api_key=`+api_key)
      .then(res=> {
          this.setState({
              activeVideo: res.data
          })
          // console.log(prevProps)
          // console.log(prevState)
          console.log(res)
      })
  }

    // getNewVideo = (id) => {
    //         axios
    //     .get (`https://project-2-api.herokuapp.com/videos/${id}?api_key=`+api_key)
    //     .then(res=> {
    //         this.setState({
    //             activeVideo: res.data
    //         })
    //         console.log(res)
    //     })
    //     }

    render()
    {
    return (
        <main>
          <PageCurrentVideo
            currentVideo={this.state.activeVideo} />
          <section className="video-content">
            <div className="video-content__current">
              <PageVideoContent
                currentVideo={this.state.activeVideo} />
              <PageCommentsForm />
              <div className="comment-entries">
                  {/* {this.state.activeVideo.data.comments.map (comment => {
                      return <EnteredComments 
                      key={comment.id} 
                      id={comment.id} 
                      name={comment.name} 
                      date={comment.date} 
                      comment={comment.comment}/>
                  })} */}
              </div>
            </div>
            <aside className="next">
              <h3 className="next__header">NEXT VIDEO</h3>
                {this.state.videos.map (video => {
                  return <PageNextVideo 
                  key={video.id}
                  id={video.id}  
                  videoTitle={video.title} 
                  channelTitle={video.channel} 
                  videoImage={video.image}/>
                })}
            </aside>
          </section>
        </main>
    );
  };
};

{/* <Route path="/video/:id" render={(routeProps) => <PageNextVideo videoList ={this.state.videos} {...routeProps}/> }/>  */}

export default MainVideoPage;