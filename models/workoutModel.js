const db = require('../db');

// Get all workouts
const getAllWorkouts = async () => {
  try {
    console.log("Going into the db for workouts")
    const [rows, fields] = await db.query('SELECT * FROM workout');
    //console.log(rows);
    return rows;   
  } catch (error) {
    throw error;
  }
};

// Create a new workout entry
const createWorkout = async (title, userId) => {
  try {
    const [result] = await db.query('INSERT INTO workout (title, USER_ID) VALUES (?, ?)', [title, userId]);
    return result.insertId;
  } catch (error) {
    throw error;
  }
};



// Update a workout entry
const updateWorkout = async (workoutId, title, userId) => {
    try {
      const [result] = await db.query('UPDATE workout SET TITLE = ?, USER_ID = ? WHERE ID = ?', [title, userId, workoutId]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  };
  
  // Delete a workout entry
  const deleteWorkout = async (workoutId) => {
    try {
      const [result] = await db.query('DELETE FROM workout WHERE ID = ?', [workoutId]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  };
  
  module.exports = {
    getAllWorkouts,
    createWorkout,
    updateWorkout,
    deleteWorkout,
  };