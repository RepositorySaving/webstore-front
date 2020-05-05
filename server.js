'use strict';

const express = require('express');
const app = express();
const session = require('express-session');

const handlebars = require('handlebars');
const expressHandlebars = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

const bodyParser = require('body-parser');
const flash = require('connect-flash');

require('dotenv').config();
require('./src/config/colors');

const shopRoutes = require('./src/routes/shopRoutes')
const adminRoutes = require('./src/routes/adminRoutes')
const accountRoutes = require('./src/routes/accountRoutes')


// ||||||||||||||||||||||||||||
// ||| [ CONFIGURATION] |||
// ||||||||||||||||||||||||||||

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var sess = {secret: 'hylex-session-private', saveUninitialized: true, resave: true, cookie: { maxAge: 60000 }}
app.use(session(sess));

app.use(express.static('public'));

app.use(flash())

// Middlewares
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    res.locals.user = req.user || null;
    next()
})



app.engine('hbs', expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: 'hbs',
    defaultLayout: 'main'
}));
app.set('views', './src/app/view');
app.set('view engine', 'hbs');

app.use('/', shopRoutes);
app.use('/account', accountRoutes);
app.use('/admin', adminRoutes);


// ||||||||||||||||||||||||||||||||||||||
// ||| [ SERVER LISTEN FUNCTION] |||
// ||||||||||||||||||||||||||||||||||||||

app.listen(process.env.PORT || 3000, () => {
    console.log('\n[LOJA] ➟  Serviço Web iniciado com sucesso!'.success);
});

module.exports = app;