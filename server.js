'use strict';

const express = require('express');
const app = express();

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

app.use(express.static('public'));
app.use(flash());

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