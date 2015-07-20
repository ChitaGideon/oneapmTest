'use strict';




module.exports = function (router) {

    var model = {a:123}


    //router.get('/', function (req, res) {
        
        
        //res.render('index', model);
        
        
    //});
    
    router.get('/', function (req, res) {
        
        
      res.send('<code><pre>' + JSON.stringify(model, null, 2) + '</pre></code>');
          
        
    });

};
