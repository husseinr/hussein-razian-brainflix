import React from 'react';
import axios from 'axios';
import PageCurrentVideo from '../PageCurrentVideo/PageCurrentVideo'
import PageVideoContent from '../PageVideoContent/PageVideoContent';
import PageCommentsForm from '../PageCommentsForm/PageCommentsForm';
import EnteredComments from '../PageEnteredComments/PageEnteredComments';
import PageNextVideo from '../PageNextVideo/PageNextVideo';

const url ="https://project-2-api.herokuapp.com/videos/?api_key=";
let api_key="33e84b73-0d50-49bb-aead-1fff87462673";

class MainVideoPage extends React.Component {
  state = {
    activeVideo:[], 

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

        axios
        .get (`https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=`+api_key)
        .then(res=> {

            this.setState({
                activeVideo: res.data
            })
            console.log(res)
        })

        .catch(err=> {console.log(err)})
    }

    componentDidUpdate () {
      const {match: {params}} = this.props;
      axios
      .get (`https://project-2-api.herokuapp.com/videos/${params.id}?api_key=`+api_key)
      .then(res=> {
        if(this.state.activeVideo.id !== params.id)
          this.setState({
              activeVideo: res.data
          })

          console.log(res)
      })

      .catch(err=> {console.log(err)})
  }

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
    );
  };
};

export default MainVideoPage;