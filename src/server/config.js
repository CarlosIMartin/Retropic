const path = require('path');
const exphbs = require('express-handlebars');

const morgan = require('morgan');
const multer = require('multer');
const express = require('express');
const errorHandler = require('errorhandler');

const routes = require('../routes/index');

module.exports = app => {
    
    // ====== Settings ======
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, '../views'));

    // HBS Views Engine configuration
    app.engine('.hbs', exphbs({
        defaultLayout: 'main',
        partialsDir: path.join(app.get('views'), 'partials'),
        layoutsDir: path.join(app.get('views'), 'layouts'),
        extname: '.hbs',
        helpers: require('./helpers')
    }));
    app.set('view engine', '.hbs');

    // ====== Middlewares ======
    app.use(morgan('dev'));
    app.use(multer({dest: path.join(__dirname, '../public/upload/temp')}).single('image'));
    // Receive images from forms with express.urlencoded
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());

    // ====== Routes ======
    routes(app);

    // ====== Static Files ======
    app.use('/public', express.static(path.join(__dirname, '../public')));

    // ====== Error Handlers ======
    if ('development' === app.get('env')) {
        app.use(errorHandler);
    }

    return app;
}