const db = require('../db');

// Get all calendar entries
const getAllCalendars = async () => {
  try {
    const [rows, fields] = await db.query('SELECT * FROM calendar');
    return rows;
  } catch (error) {
    throw error;
  }
};

// Create a new calendar entry
const createCalendar = async (date, workoutId) => {
  console.log("In calendarModel", date, workoutId)
  try {
    const [result] = await db.query('INSERT INTO calendar (DATE, Workout_ID) VALUES (?, ?)', [date, workoutId]);
    return result.insertId;
  } catch (error) {
    throw error;
  }
};

// Update a calendar entry
const updateCalendar = async (date, workoutId) => {
  try {
    const [result] = await db.query('UPDATE calendar SET Workout_ID = ? WHERE DATE = ?', [workoutId, date]);
    return result.affectedRows > 0;
  } catch (error) {
    throw error;
  }
};

// Delete a calendar entry
const deleteCalendar = async (date) => {
  try {
    const [result] = await db.query('DELETE FROM calendar WHERE DATE = ?', [date]);
    return result.affectedRows > 0;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllCalendars,
  createCalendar,
  updateCalendar,
  deleteCalendar,
};
