const router = require('express').Router();
const Video = require('../models/videos');

//Get all jobs
router.route('/').get((req, res) => {
  Video.find()
    .then((videos) => {
      res.json(videos);
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

//Add new jobs
router.route('/add').post((req, res) => {
  const { title, name, category, video_thumbnail,  video_length,  rating } = req.body;
  const newVideo = new Video({
    title,
    name,
    category,
    video_thumbnail,
    video_length,
    rating,
  });

  newVideo
    .save()
    .then(() => res.json('Video added'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
