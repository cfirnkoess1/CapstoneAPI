const calendarModel = require('../models/calendarModel');

const getAllCalendars = async (req, res) => {
  try {
    const calendars = await calendarModel.getAllCalendars();
    res.json(calendars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCalendar = async (req, res) => {
  const { date, workoutId } = req.body;
  try {
    const newCalendarId = await calendarModel.createCalendar(date, workoutId);
    res.json({ id: newCalendarId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCalendar = async (req, res) => {
  const { date } = req.params;
  const { workoutId } = req.body;
  try {
    const updated = await calendarModel.updateCalendar(date, workoutId);
    res.json({ success: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCalendar = async (req, res) => {
  const { date } = req.params;
  try {
    const deleted = await calendarModel.deleteCalendar(date);
    res.json({ success: deleted });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCalendars,
  createCalendar,
  updateCalendar,
  deleteCalendar,
};
