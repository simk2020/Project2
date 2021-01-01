const securityScan=(req,res,next)=>{
    if(!req.session.logged_in){
        res.redirect('/login');
    }else{
        next();
    }
}
module.exports = securityScan;