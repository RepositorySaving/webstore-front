'use strict';

const express = require('express');
const router = express.Router();

const userController = require("../app/controller/userController");

router.get("/login", (req, res) => {
    if(req.session.user == null) {
        res.render('account/login', { title: 'HYLEX © - Entrar' })
    } else {
        res.redirect('/account/last_orders')
    }
});

router.post("/login", userController.auth);

router.get("/last_orders", (req, res) => {
    if (req.session.user != null) {
        res.render('account/last_orders', { title: 'HYLEX © - Conta' })
    } else {
        req.flash('error_msg', "Para acessar essa pagina, você precisa estar logado.")
        res.redirect('/account/login')
    }
});

module.exports = router;