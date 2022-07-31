const checkLogout = (req,res,next)=>{
  if(req.user){
      //  console.log(req.user);
      return next();
  }else{
    return res.status(401).send("Attem to sign out fial.");
  }
}

const checkLogin = (req,res,next)=>{
    if(!req.user){
      return next();
    }else{
      return res.status(401).send("You cannot sign in again. Please sign out before sign in again.");
    }
}

const checkRegister = (req,res,next)=>{
  if(!req.user){
    return next();
  }else{
    return res.status(401).send("You cannot register a user.");
  }
}

const checkUser= (req,res,next)=>{
  if(req.user){
    return next();
  }else{
    return res.status(401).send("You cannot access this route. PLease log in.");
  }
}

module.exports = {checkLogin,checkLogout,checkRegister,checkUser};