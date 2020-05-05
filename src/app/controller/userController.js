const connection = require("../../database/connection");

module.exports = {
    async auth(req, res) {

        const user = await connection("nl2_users").select("*").where({ email: req.body.email }).first();

        if (user == null) {
            console.log('Usuario não encontrado, verifique se escreveu corretamente.')
            req.flash('error_msg', "Usuario não encontrado, para acessar você precisa ter uma conta em nosso site.")
            res.redirect('/account/login')
        } else if (user.nickname == null || user.nickname != req.body.nickname) {
            console.log('O nickname inserido esta errado, tente novamente.')
            req.flash('error_msg', "O nickname inserido esta errado, tente novamente.")
            res.redirect('/account/login')
        } else {
            sessionData = req.session
            sessionData.user = user;
            res.redirect('/')
        }
        
    } 
}