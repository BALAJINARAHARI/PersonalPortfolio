const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const compression = require('compression');
const methodoverride =require('method-override');
const path = require('path');


module.exports =() =>{
    const app = express();
    

    if(process.env.NODE_ENV === 'development')
    {
       app.use(morgan('dev'));

    }
    else if(process.env.NODE_ENV === 'production')
    {
        app.use(compression())

    }

    app.use(bodyparser.urlencoded({extended:true}));

    app.use(bodyparser.json());

    app.use(methodoverride());

    app.set('views','./app/views');
    app.set('view engine','ejs');
    app.use('/',require('../app/routes/index.server.route'))
    
    app.use(express.static('public'));
    app.use(express.static('./node_modules'));

    
    return app ;
}

