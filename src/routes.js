let express = require("express");
let router = express.Router();
const CreateUserController = require("./controllers/CreateUserController");
const AuthenticateUserController = require("./controllers/AuthenticateUserController");

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/create', new CreateUserController().handle)

router.post('/authenticate', new AuthenticateUserController().handle)

/* 
POST 
GET
PUT
PATCH
DELETE
*/

module.exports = router;