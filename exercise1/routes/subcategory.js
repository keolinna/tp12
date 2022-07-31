const router = require("express").Router();
const {
  create,
  getSub,
  update,
  deleted,

} = require("../controller/subcategory");




router.get("/",getSub);
router.post("/create",create);
router.post("/delete/:id",deleted);
router.post("/edit/:id",update);



module.exports = router;
