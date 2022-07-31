const mongoose = require('mongoose')

const  priceSchema = mongoose.Schema({
  store: {
      type: String,
      required: true,
  },
  price : {
      type: Number,
      default:0
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
  },

 

})


module.exports = mongoose.model('Price', priceSchema);