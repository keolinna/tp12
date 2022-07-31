const router = require("express").Router();


const {
  create,
  getPrice,
  deleted,
  update,
  getpricebyproduct
} = require("../controller/price");


router.get("/",getPrice);
router.get("/:id",getpricebyproduct);
router.post("/create",create);
router.post("/delete/:id",deleted);
router.post("/edit/:id",update);


module.exports = router;
