const express = require('express');
const router = express.Router();
const calendarModel = require('../models/calendarModel');

// Get all calendar entries
router.get('/', async (req, res) => {
  try {
    const calendars = await calendarModel.getAllCalendars();
    res.json(calendars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new calendar entry
router.post('/', async (req, res) => {
  const { date, workoutId } = req.body;
  console.log('Request Body', req.body);
  let placeholder = workoutId;
  try {
    const newCalendarId = await calendarModel.createCalendar(date, placeholder);
    res.json({ id: newCalendarId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a calendar entry
router.put('/:date', async (req, res) => {
  const { date } = req.params;
  const { workoutId } = req.body;
  try {
    const updated = await calendarModel.updateCalendar(date, workoutId);
    res.json({ success: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a calendar entry
router.delete('/:date', async (req, res) => {
  const { date } = req.params;
  try {
    const deleted = await calendarModel.deleteCalendar(date);
    res.json({ success: deleted });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
