const connection = require("../../database/connection");

module.exports = {
    async index(req, res) {

        const user = connection("nl2_users").select("*").where({ email: req.body.email }).first();
        
    } 
}