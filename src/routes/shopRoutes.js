'use strict';

const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render('pages/index', { title: 'HYLEX © - Loja' })
});

router.get("/ipn", (req, res) => {
    console.log(req)
});

router.get("/cash", (req, res) => {
    res.render('shop/cash', { title: 'HYLEX © - Cash' })
});

router.get("/checkout", (req, res) => {
    if (req.session.user != null) {
        res.render('pages/checkout', { title: 'HYLEX © - Checkout' })
        console.log(req.session.user)
    } else {
        res.redirect('/account/login')
    }
});

/////////////////////
// Rotas de rankup
router.get("/rankup/vips", (req, res) => {
    res.render('shop/rankup/vips', { title: 'HYLEX © - RankUP' })
});

/////////////////////
// Rotas de minigames
router.get("/minigames/vips", (req, res) => {
    res.render('shop/minigames/vips', { title: 'HYLEX © - MiniGames' })
});


module.exports = router;