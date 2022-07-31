const Category = require('../model/category');
const subCategory = require('../model/subcategory');
const Product = require('../model/product');

const create= async(req,res)=>{
   
  const {name,description,price,SubCategory,countInStock,image} = req.body;

  const checkSub = await  subCategory.findOne({ name: SubCategory});

  if(checkSub){

    const product = new Product({
      name: name,
      description:  description,
      price : price,
      subcategory:checkSub._id,
      countInStock: countInStock,
      image:image
    })
    try {
      const newPro = await product.save();
      if(newPro){
        res.status(201).json({msg:'success'});
      }
    } catch (err) {
      res.status(500).json({msg:'error', message: err.message });
    }


  }else{
    res.json({ msg:'error',command:"You cannot cannot create this data"});
  }



}


const deleted = async  (req,res)=>{
  const { id } = req.params;
  try {
    const deleting = await Product.deleteOne({ _id: id });
    if(deleting){
      res.json({ msg:'success', command: "deleted success" });
    }
  } catch (error) {
    res.json({ msg:'error',command:"cannot delete this data" });
  }
}

const update =  async  (req,res)=>{
  const { id } = req.params;
  const {name,description,price,SubCategory,countInStock} = req.body;
  
  const checkSub = await subCategory.findOne({ name: SubCategory});
  if(checkSub){
    
    
    try {
      const edit_Pro = await Product.findById(id);
      
      edit_Pro.name = name;
      edit_Pro.description = description;
      edit_Pro.price = price;
      edit_Pro.SubCategory = checkSub._id;
      edit_Pro.countInStock =countInStock;


      await edit_Pro.save();
      res.json({ msg:'success', command: "Edit success"  });


    } catch (error) {
      res.json({ msg:'error',command:error });
    }
  }else{
    res.json({ msg:'error',command:"You cannot cannot delete this data" });
  }
}

const getPro= async (req,res)=>{
  try {
    const getting = await Product.find();
    res.json({ msg: 'success', datas: getting });
  } catch (error) {
    res.json({ msg: 'error', error: error });
  }
}

const getproductbySub= async (req,res)=>{
  const { id } = req.params;
  try {
    const getting = await Product.find({subcategory:id});
    res.json({msg:'success', datas: getting });
  } catch (error) {
    res.json({ msg:'error', error: error });
  }
}


module.exports= {
  create,
  update,
  deleted,
  getPro,
  getproductbySub
}