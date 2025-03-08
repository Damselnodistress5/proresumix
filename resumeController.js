const atsService = require('../services/atsService');
const LinkedIn = require('linkedin-api');

exports.generateResume = async (req, res) => {
  const { personalDetails, education, workExperience, skills, achievements } = req.body;

  try {
    const resume = await atsService.generateResume(personalDetails, education, workExperience, skills, achievements);
    res.status(200).json({ resume });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate resume' });
  }
};

exports.importLinkedIn = async (req, res) => {
  const { linkedInToken } = req.body;

  try {
    const linkedInData = await LinkedIn.getProfile(linkedInToken);
    res.status(200).json({ linkedInData });
  } catch (error) {
    res.status(500).json({ error: 'Failed to import LinkedIn data' });
  }
};