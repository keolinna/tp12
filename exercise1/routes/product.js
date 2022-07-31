const router = require("express").Router();


const {
  create,
  getPro,
  deleted,
  update,
  getproductbySub
} = require("../controller/product");


router.get("/",getPro);
router.get("/:id",getproductbySub);
router.post("/create",create);
router.post("/delete/:id",deleted);
router.post("/edit/:id",update);


module.exports = router;
