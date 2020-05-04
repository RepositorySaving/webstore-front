const connection = require("../../database/connection");

module.exports = {
    async index(req, res) {
        const user = await connection("nl2_users").select("*").where("email", "zeedu.profissional@gmail.com")

        return res.json(user);
    } 
}