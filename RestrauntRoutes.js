const express = require('express');
const Restaurant = require('../FSWD-CA2/Restraunt');
const router = express.Router();

// POST: Create a new restaurant
router.post('/', async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET: Retrieve all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// GET: Retrieve a specific restaurant by ID
router.get('/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }
    res.status(200).json(restaurant);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// PUT: Update restaurant details
router.put('/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }
    res.status(200).json(restaurant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE: Remove a restaurant
router.delete('/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }
    res.status(200).json({ message: 'Restaurant deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;

// POST: Create a new restaurant
router.post('/', async (req, res) => {
    try {
      const restaurant = new Restaurant(req.body);
      await restaurant.save();
      res.status(201).json(restaurant);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

// GET: Retrieve all restaurants
router.get('/', async (req, res) => {
    try {
      const restaurants = await Restaurant.find();
      res.status(200).json(restaurants);
    } catch (err) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  });

// GET: Retrieve a specific restaurant by ID
router.get('/:id', async (req, res) => {
    try {
      const restaurant = await Restaurant.findById(req.params.id);
      if (!restaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
      }
      res.status(200).json(restaurant);
    } catch (err) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  });

// PUT: Update restaurant details
router.put('/:id', async (req, res) => {
    try {
      const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!restaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
      }
      res.status(200).json(restaurant);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

// DELETE: Remove a restaurant
router.delete('/:id', async (req, res) => {
    try {
      const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
      if (!restaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
      }
      res.status(200).json({ message: 'Restaurant deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  });

