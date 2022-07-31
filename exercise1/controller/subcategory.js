const Category = require('../model/category');
const SubCategory = require('../model/subcategory');
const Product = require('../model/product');
const subcategory = require('../model/subcategory');

const create = async(req,res)=>{
  //req category ID and subname
  const {cat_name,sub_name} = req.body;
  
  const checkCat = await Category.findOne({ name: cat_name});
  const checkSub = await Category.findOne({ name: sub_name});

  if(!checkCat || checkSub){
    res.status(400).json({msg:'error',command:'Cannot create please check your input.'});
  }else{
    const subcategory = new SubCategory({
      name:sub_name,
      Category: checkCat._id
    })
    try {
      const newSub = await subcategory.save();
      
      checkCat.subcategories.push(subcategory);
      await checkCat.save();

      if(newSub){
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
    const deleting = await subcategory.deleteOne({ _id: id });
    if(deleting){
      res.json({ msg:'success', command: "deleted success" });
    }
  } catch (error) {
    res.json({ msg:'error',command:"cannot delete this data" });
  }
}

const update =  async  (req,res)=>{
  const { id } = req.params;
  const { sub_name,cat_name } = req.body;
  
  const checkCat = await Category.findOne({ name: cat_name});
  const checkSub = await Category.findOne({ name: sub_name});
 
  if(!checkCat || checkSub){
    res.status(400).json({msg:'error',command:'Cannot edit please check your data.'});
  }else{
    const Edit_subcategory = await SubCategory.findById(id);
    
    if(Edit_subcategory){
      Edit_subcategory.name = sub_name
      Edit_subcategory.Category = checkCat._id 

      try {
        await Edit_subcategory.save();
        res.json({ msg:'success', command: "Edit success" });
      } catch (err) {
        res.json({ msg:'error',command:"You cannot cannot delete this data"  });
      }

    }else{
      res.status(400).json({msg:'error',command:'Cannot edit please check your data.'});
    }
    
   
  }

}

const getSub = async (req,res)=>{
  try {
    //
    const getting = await SubCategory.find();
    res.json({ msg: 'success', datas: getting });
  } catch (error) {
    res.json({ msg: 'error', error: error });
  }
}




module.exports= {
  create,
  getSub,
  deleted,
  update

}