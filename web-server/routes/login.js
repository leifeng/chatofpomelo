var checkusr=require("../lib/checkuser");

var login=function(req,res){
    res.render('login');
}
var post=function(req,res){
    var username=req.body.username;
    var pwd=req.body.pwd;
    console.log(username);
    checkusr.checkuser(username,pwd,function(result){
        if(result){
                res.render('chat');
        }
    })  ;
}
exports.login=login;
exports.post=post;