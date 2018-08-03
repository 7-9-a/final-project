const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  location: {
    type: String
  },
  bio: {
    type: String
  },
  movies: [
    {
      title: {
        type: String,
        required: true
      },
      director: {
        type: String,
        required: true
      },
      rating: {
        type: String,
        required: true
      },
      yearofrelease: {
        type: Date,
        required: true
      },
      genre: {
        type: String
      },
      cast: {
        type: [String]
      },
      plotsummary: {
        type: String
      },
      stars: {
        type: Number
      },
      review: {
        type: String
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
