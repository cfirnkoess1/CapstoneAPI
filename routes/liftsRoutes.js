const express = require('express');
const router = express.Router();
const liftsModel = require('../models/liftsModel');

// Get all lifts
router.get('/', async (req, res) => {
  try {
    const lifts = await liftsModel.getAllLifts();
    res.json(lifts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new lift entry
router.post('/', async (req, res) => {
  const { liftTitle, workoutId, sets, reps, isCompleted } = req.body;
  try {
    const newLiftId = await liftsModel.createLift(liftTitle, workoutId, sets, reps, isCompleted);
    res.json({ id: newLiftId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a lift entry
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { liftTitle, workoutId, sets, reps, isCompleted } = req.body;
  try {
    const updated = await liftsModel.updateLift(id, liftTitle, workoutId, sets, reps, isCompleted);
    res.json({ success: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a lift entry
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await liftsModel.deleteLift(id);
    res.json({ success: deleted });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
