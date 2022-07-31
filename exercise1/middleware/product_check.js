const {productSchema} = request('../model/product');


productSchema.pre('save', async function (next) {
  if (this.SubCategory) {
    try {
      const check = await SubCategory.findById(this.SubCategory);
      if (!check || JSON.stringify(check.Category) !== JSON.stringify(this.Category)) {
        throw new Error('Check your Category and/or SubCategory');
      }
    } catch (error) {
      throw error;
    }
  }
  next();
});


module.exports = {productSchema};