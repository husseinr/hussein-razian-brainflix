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

    componentDidUpdate () {
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
      .catch(err=> {console.log(err)})
    }

    addVideo = (e) => {
      e.preventDefault();
      let newVideo = {
        id: uuid.v4(),
        title: e.target.title.value,
        channel: 'BrainFlix Developer',
        image: <img src='../../assets/Images/Upload-video-preview.jpg' alt = "upload-photo"/>,
        description: e.target.description.value,
        views: '1,000,000',
        likes: '100,000',
        duration: '7:00',
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: '1991/02/17',
        comments: [
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
    }

    render()
    {
    return (
      <>
      <PageHeader />
        <Switch>
          <Route exact path="/upload"  render = {()=> <PageUploadVideo addVideo = {this.addVideo}/> }/>
          {/* <Route exact path="/upload" component = {PageUploadVideo}/> */}
            <main>
              <PageCurrentVideo
                currentVideo={this.state.activeVideo} />
              <section className="videontent">
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