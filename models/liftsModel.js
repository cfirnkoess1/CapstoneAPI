const db = require('../db');

// Get all lifts
const getAllLifts = async () => {
  try {
    const [rows, fields] = await db.query('SELECT * FROM lifts');
    return rows;
  } catch (error) {
    throw error;
  }
};

// Create a new lift entry
const createLift = async (liftTitle, workoutId, sets, reps, isCompleted) => {
  try {
    const [result] = await db.query('INSERT INTO lifts (LIFT_TITLE, Workout_ID, SETS, REPS, ISCOMPLETED) VALUES (?, ?, ?, ?, ?)', [liftTitle, workoutId, sets, reps, isCompleted]);
    return result.insertId;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllLifts,
  createLift,
};

// Update a lift entry
const updateLift = async (liftId, liftTitle, workoutId, sets, reps, isCompleted) => {
    try {
      const [result] = await db.query('UPDATE lifts SET LIFT_TITLE = ?, Workout_ID = ?, SETS = ?, REPS = ?, ISCOMPLETED = ? WHERE ID = ?', [liftTitle, workoutId, sets, reps, isCompleted, liftId]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  };
  
  // Delete a lift entry
  const deleteLift = async (liftId) => {
    try {
      const [result] = await db.query('DELETE FROM lifts WHERE ID = ?', [liftId]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  };
  
  module.exports = {
    getAllLifts,
    createLift,
    updateLift,
    deleteLift,
  };