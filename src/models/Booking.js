const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId, // Usuario que cadastrou o Spot
    ref: 'User'
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId, // Usuario que cadastrou o Spot
    ref: 'Spot'   
  }
})

module.exports = mongoose.model('Booking', BookingSchema)