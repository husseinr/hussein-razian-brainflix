const express = require('express')
const app = express()
const port = process.env.PORT || process.argv[2] || 8080

// const bodyParser = require('body-parser')
// app.use(bodyParser.json())

const videos = require ('./videos.json')


app.get('/', (_req, res) => {
    res.send('Success!')
  })

app.get('/videos', (_req, res) => {
    res.json(videos)
  })

  app.get('/videos/:id', (req, res) => {
    res.json(videoInfo[0], {id: req.params.id})
  })

app.listen(port, () => console.log(`Listening on ${port}`))