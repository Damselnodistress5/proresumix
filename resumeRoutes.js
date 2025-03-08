const express = require('express');
const resumeController = require('../controllers/resumeController');

const router = express.Router();

router.post('/generate', resumeController.generateResume);
router.post('/import/linkedin', resumeController.importLinkedIn);

module.exports = router;