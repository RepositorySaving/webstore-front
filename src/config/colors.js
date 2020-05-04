'use strict';

const colors = require('colors');

colors.setTheme({
    success: ['brightGreen'],
    warn: ['brightYellow'],
    error: ['brightRed']
});

module.exports = colors;