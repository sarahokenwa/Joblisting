const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videosSchema = new Schema(
  {
    title: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    video_thumbnail: { type: String, required: true },
    video_length: { type: String, required: true },
    rating: { type: String, required: true}
  },
  {
    timestamps: true,
  }
);

const Video = mongoose.model('Video', videosSchema);

module.exports = Video;
