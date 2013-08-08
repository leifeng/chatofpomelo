var login=require('./routes/login');

module.exports=function(app){
    app.get('/',login.login);
    app.get('/login', login.login);
    app.post('/login',login.post);

}