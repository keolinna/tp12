
const SubCategory = require('../model/subcategory');
const Product = require('../model/product');
const Price = require('../model/price');
const subcategory = require('../model/subcategory');

const create = async(req,res)=>{
  const {store,price,product_name} = req.body;


  
  const checkProdcut = await Product.findOne({ name: product_name});


   
  
  if(!checkProdcut){
      res.status(400).json({msg:'error',command:'Cannot Find product Name.'});

  }else{

    const price_Create = new Price({
      store:store,
      price:price,
      product:checkProdcut._id
    })

    try {
      const newPrice = await price_Create.save();
      if(newPrice){
        res.status(201).json({msg:'success',command:'create Success'});
      }else{
        res.status(201).json({msg:'Error',command:'Cannot Create'});
      }
    } catch (err) {
      res.status(500).json({msg:'error', message: err.message });
    }
  }
}

const deleted = async  (req,res)=>{
  const { id } = req.params;

  try {
    const deleting = await Price.deleteOne({ _id: id });
    if(deleting){
      res.json({ msg:'success', command: "deleted success" });
    }
  } catch (error) {
    res.json({ msg:'error',command:"cannot delete this data" });
  }
}

const update =  async  (req,res)=>{
  const { id } = req.params;

  const {store,price,product_name} = req.body;
  const checkProduct = await Product.findOne({ name: product_name});

  if(checkProduct){
    try {

      const edit_Price = await Price.findById(id);
    
      edit_Price.price = price;
      edit_Price.store = store;
      edit_Price.product = checkProduct._id;

      await edit_Price.save();

      res.json({ msg:'success', command: "Edit success"  });

    } catch (error) {

      res.json({ msg:'error',command:"You cannot cannot update this data"  });

    }
  }else{
    res.status(400).json({msg:'error',command:'Cannot Find product Name.'});
  }

}

const getPrice = async (req,res)=>{
  try {
    const getting = await Price.find();
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


const getpricebyproduct= async (req,res)=>{
  const { id } = req.params;
  try {
    const getting = await Price.find({product:id});
    res.json({msg:'success', datas: getting });
  } catch (error) {
    res.json({ msg:'error', error: error });
  }
}


module.exports= {
  create,
  update,
  deleted,
  getPrice,
  getpricebyproduct

}