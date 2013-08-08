var checkusr=require("../lib/checkuser");

var login=function(req,res){
    res.render('login');
}
var post=function(req,res){
    var username=req.body.username;
    var pwd=req.body.pwd;
}
exports.login=login;