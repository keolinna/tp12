const router = require("express").Router();
//contoller
const {createUser,
        login,
        userinfo,
        updateUser,
        updatePassword,
        deleteUser
} = require('../controller/user')
const checkAuth = require("../middleware/auth");

//help token
const store = require("store2");
const {checkLogin,checkLogout,checkRegister,checkUser} = require("../middleware/auth_each");




router.post('/login',checkAuth,checkLogin,login);
router.post('/register',checkAuth,checkRegister,createUser);
router.get('/logout',checkAuth,checkLogout, (req, res) => {
  store.clear();
  res.status(200).json({msg:'logout success'})
});
router.get('/',checkAuth,checkUser, (req, res) => {
  res.status(200).json({msg:'success',comment:'Hello home page.'})
});
router.get('/me',checkAuth,checkUser,userinfo);

router.post("/update-user",checkAuth,checkUser,updateUser);
router.post("/update-password",checkAuth,checkUser,updatePassword);
router.post("/delete-user",checkAuth,checkUser,deleteUser);



module.exports = router;
