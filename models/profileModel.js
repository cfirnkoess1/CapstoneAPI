const db = require('../db');

// Get all profiles
const getAllProfiles = async () => {
  try {
    const [rows, fields] = await db.query('SELECT * FROM profile');
    return rows;
  } catch (error) {
    throw error;
  }
};

// Create a new profile entry
const createProfile = async (name, description, profileImage, username, password, email) => {
  try {
    const [result] = await db.query('INSERT INTO profile (NAME, DESCRIPTION, PROFILE_IMAGE, USERNAME, PASSWORD, EMAIL) VALUES (?, ?, ?, ?, ?, ?)', [name, description, profileImage, username, password, email]);
    return result.insertId;
  } catch (error) {
    throw error;
  }
};




// Update a profile entry
const updateProfile = async (profileId, name, description, profileImage, username, password, email) => {
    try {
      const [result] = await db.query('UPDATE profile SET NAME = ?, DESCRIPTION = ?, PROFILE_IMAGE = ?, USERNAME = ?, PASSWORD = ?, EMAIL = ? WHERE ID = ?', [name, description, profileImage, username, password, email, profileId]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  };
  
  // Delete a profile entry
  const deleteProfile = async (profileId) => {
    try {
      const [result] = await db.query('DELETE FROM profile WHERE ID = ?', [profileId]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  };
  
  module.exports = {
    getAllProfiles,
    createProfile,
    updateProfile,
    deleteProfile,
  };