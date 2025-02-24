const mongoose = require('mongoose');

// Define the menu item schema
const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
});

// Define the restaurant schema
const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  cuisine: { type: String, required: true },
  rating: { type: Number },
  menu: [menuItemSchema], // Embed the menu items
});

// Create and export the Restaurant model
module.exports = mongoose.model('Restaurant', restaurantSchema);