'use strict';

const express = require('express');
const router = express.Router();

const userController = require("../app/controller/userController");

router.get("/login", (req, res) => {
    res.render('account/login', { title: 'HYLEX © - Entrar' })
});

router.get("/loginteste", userController.index)

router.get("/last_orders", (req, res) => {
    res.render('account/last_orders', { title: 'HYLEX © - Conta' })
});

module.exports = router;