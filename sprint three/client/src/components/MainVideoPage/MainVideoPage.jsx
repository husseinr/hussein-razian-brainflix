import React from 'react';
import axios from 'axios';
import uuid from 'uuid';
import {Route, Switch} from 'react-router-dom';
import PageHeader from '../PageHeader/PageHeader';
import PageUploadVideo from '../PageUploadVideo/PageUploadVideo';
import PageCurrentVideo from '../PageCurrentVideo/PageCurrentVideo';
import PageVideoContent from '../PageVideoContent/PageVideoContent';
import PageCommentsForm from '../PageCommentsForm/PageCommentsForm';
import EnteredComments from '../PageEnteredComments/PageEnteredComments';
import PageNextVideo from '../PageNextVideo/PageNextVideo';
import UploadPhoto from '../../assets/Images/Upload-video-preview.jpg';
import './mainVideoPage.scss';

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

class MainVideoPage extends React.Component {
  state = {
    activeVideo:[], 

    videos: [],

    };
  
    componentDidMount() {

      axios
      .get ('/videos')

      .then(res=> {
          this.setState({
              videos: res.data
          })
      })

      .catch(err=> {console.log(err)})

      axios
      .get ('/videos/1af0jruup5gu')

      .then(res=> {
          this.setState({
              activeVideo: res.data
          })
      })

      .catch(err=> {console.log(err)})
    }

    componentDidUpdate (e) {
      const {match: {params}} = this.props;
      if(this.state.activeVideo.id !== params.id) 
      axios
      .get (`/videos/${params.id}`)
      .then(res=> {

        console.log(JSON.stringify(res))
          this.setState({
              activeVideo: res.data
          })
          window.scrollTo(0,0)
      })
      .catch(err=> {console.log(err + 'cannot get data :(')})

      // let commentsForm = document.querySelector('.comments__form');
      // commentsForm.reset();
    }


  

    addVideo = (e) => {
      e.preventDefault();
      let newVideo = {
        id: uuid.v4(),
        title: e.target.title.value,
        channel: 'BrainFlix Developer',
        image: UploadPhoto,
        description: e.target.description.value,
        views: '1,000,000',
        likes: '100,000',
        duration: '7:00',
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: today,
        comments: [
     {
                name: "Micheal Lyons",
                comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
                id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                likes: 0,
                timestamp: 1545162149000
            },
            {
                name: "Gary Wong",
                comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                likes: 0,
                timestamp: 1544595784046
            },
            {
                name: "Theodore Duncan",
                comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
                id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
                likes: 0,
                timestamp: 1542262984046
            }
        ]
      }

      axios
      .post('/videos', newVideo)
      
      .then (res=> {
        this.setState({
          videos: res.data
        })
        console.log(this.state.videos)
      })

      e.target.reset();
    }

    render()
    {
    return (
      <>
      <PageHeader />
        <Switch>
          <Route exact path="/upload"  render = {()=> <PageUploadVideo addVideo={this.addVideo} /> }/>
            <main>
              <PageCurrentVideo
                currentVideo={this.state.activeVideo} />
              <section className="video-content">
                <div className="video-content__current">
                  <PageVideoContent
                    currentVideo={this.state.activeVideo} />
                  <PageCommentsForm currentVideo={this.state.activeVideo}/>
                  <div className="comment-entries">
                    {this.state.activeVideo.comments && this.state.activeVideo.comments.map (comment => {
                        return <EnteredComments 
                        key={comment.id} 
                        id={comment.id} 
                        name={comment.name} 
                        date={comment.timestamp} 
                        comment={comment.comment}/>
                    })}
                  </div>
                </div>
                <aside className="next">
                  <h3 className="next__header">NEXT VIDEO</h3>
                    {this.state.videos
                    .filter(video => video.id !== this.state.activeVideo.id)
                    .map (video => {
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
          </Switch>
        </>
    );
  };
};

export default MainVideoPage;