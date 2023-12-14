const express = require('express');
const router = express.Router();
const workoutModel = require('../models/workoutModel');

// Get all workouts
router.get('/', async (req, res) => {
  try {
    const workouts = await workoutModel.getAllWorkouts();
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new workout entry
router.post('/', async (req, res) => {
    console.log('Request Body', req.body);
  const { title, userId } = req.body;
  try {
    const newWorkoutId = await workoutModel.createWorkout(title, userId);
    res.json({ id: newWorkoutId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a workout entry
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, userId } = req.body;
  try {
    const updated = await workoutModel.updateWorkout(id, title, userId);
    res.json({ success: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a workout entry
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await workoutModel.deleteWorkout(id);
    res.json({ success: deleted });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
