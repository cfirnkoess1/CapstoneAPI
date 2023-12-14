const profileModel = require('../models/profileModel');

const getAllProfiles = async (req, res) => {
  try {
    const profiles = await profileModel.getAllProfiles();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProfile = async (req, res) => {
  const { name, description, profileImage, username, password, email } = req.body;
  try {
    const newProfileId = await profileModel.createProfile(name, description, profileImage, username, password, email);
    res.json({ id: newProfileId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProfile = async (req, res) => {
  const { id } = req.params;
  const { name, description, profileImage, username, password, email } = req.body;
  try {
    const updated = await profileModel.updateProfile(id, name, description, profileImage, username, password, email);
    res.json({ success: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await profileModel.deleteProfile(id);
    res.json({ success: deleted });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProfiles,
  createProfile,
  updateProfile,
  deleteProfile,
};
