let express = require('express');
let router = express.Router();
var website_bukutamu_route = require('../controller/index');

module.exports = function(router) {

    //website endpoint
    //bukutamu endpoint
    router.post('/api/v1/bukutamu/save', website_bukutamu_route.save_data);
    router.get('/api/v1/bukutamu/', website_bukutamu_route.get_all_data);
    router.delete('/api/v1/bukutamu/delete/:id_bukutamu', website_bukutamu_route.delete_data);
    router.put('/api/v1/bukutamu/update/:id_bukutamu', website_bukutamu_route.update_data);
    router.get('*', website_bukutamu_route.page_not_found);
}