const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: {
      type: String,
      required: true,
  },
  description: {
      type: String,
      required: true
  },
  price : {
      type: Number,
      default:0
  },
  image: {
    type: String
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
  },
  countInStock: {
      type: Number,
      required: true,
      min: 0,
      max: 255
  },
 

})


module.exports = mongoose.model('Product', productSchema);