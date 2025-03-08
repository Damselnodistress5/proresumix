const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  linkedInProfile: { type: String },
  resumeData: {
    personalDetails: { type: Object },
    education: { type: Array },
    workExperience: { type: Array },
    skills: { type: Array },
    achievements: { type: Array }
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;