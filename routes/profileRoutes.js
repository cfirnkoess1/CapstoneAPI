const express = require('express');
const router = express.Router();
const profileModel = require('../models/profileModel');

// Get all profiles
router.get('/', async (req, res) => {
  try {
    const profiles = await profileModel.getAllProfiles();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new profile entry
router.post('/', async (req, res) => {
  const { name, description, profileImage, username, password, email } = req.body;
  try {
    const newProfileId = await profileModel.createProfile(name, description, profileImage, username, password, email);
    res.json({ id: newProfileId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a profile entry
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, profileImage, username, password, email } = req.body;
  try {
    const updated = await profileModel.updateProfile(id, name, description, profileImage, username, password, email);
    res.json({ success: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a profile entry
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await profileModel.deleteProfile(id);
    res.json({ success: deleted });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
