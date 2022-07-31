const Category = require('../model/category');
const SubCategory = require('../model/subcategory');
const Product = require('../model/product');
const subcategory = require('../model/subcategory');

const create = async(req,res)=>{
  const {cat_name} = req.body;
  
  const category = new Category({
    name:cat_name
  })
   
  const checkExist = await Category.findOne({ name: cat_name})
  if(checkExist){
      res.status(400).json({msg:'success',command:'Category is already exits'});
  }else{
    try {
      const newCat = await category.save();
      if(newCat){
        res.status(201).json({msg:'success'});
      }
    } catch (err) {
      res.status(500).json({msg:'error', message: err.message });
    }
  }
}

const deleted = async  (req,res)=>{
  const { id } = req.params;

  try {
    const deleting = await Category.deleteOne({ _id: id });
    if(deleting){
      res.json({ msg:'success', command: "deleted success" });
    }
  } catch (error) {
    res.json({ msg:'error',command:"cannot delete this data" });
  }
}

const update =  async  (req,res)=>{
  const { id } = req.params;
  const { name } = req.body;
  
  console.log(id, name);
  try {
    const edit_cat = await Category.findById(id);
    edit_cat.name = name;
    await edit_cat.save();
    res.json({ msg:'success', command: "Edit success"  });
  } catch (error) {
    res.json({ msg:'error',command:"You cannot cannot delete this data"  });
  }
}

const getCat = async (req,res)=>{
  try {
    const getting = await Category.find().populate("subcategories");
    console.log(getting);
    if(getting){
      res.json({ msg: 'success', datas: getting });
    }else{
      res.json({ msg: 'error', error: error });
    }
    
  } catch (error) {
    res.json({ msg: 'error', error: error });
  }
}



module.exports= {
  create,
  update,
  deleted,
  getCat,
}