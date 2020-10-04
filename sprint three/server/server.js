const express = require('express')
const app = express()
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const videos = require ('./videos.json')


app.get('/', (_req, res) => {
    res.send('Success!')
  })

app.get('/videos', (_req, res) => {
    res.json(videos)
  })

  app.get('/videos/:id', (req, res) => {
    const currentVideo = videos.find(video => video.id === req.params.id);
    res.json({
      id: currentVideo.id, 
      title: currentVideo.title, 
      channel: currentVideo.channel,
      image: currentVideo.image,
      description: currentVideo.description,
      views: currentVideo.views,
      likes: currentVideo.likes,
      duration: currentVideo.duration,
      videos: currentVideo.video,
      timestamp: currentVideo.timestamp,
      comments: currentVideo.comments,
  })
  })

  app.post('/videos', (req, res) => {
    const {
      id,
      title,
      channel,
      image,
      description,
      views,
      likes,
      duration,
      video,
      timestamp,
      comments } = req.body
    res.json([
      ...videos,
      {
        id,
        title,
        channel,
        image,
        description,
        views,
        likes,
        duration,
        video,
        timestamp,
        comments
      }
    ])
  })

app.listen(port, () => console.log(`Listening on ${port}`))