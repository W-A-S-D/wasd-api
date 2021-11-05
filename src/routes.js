let express = require("express");
let router = express.Router();
const CreateUserController = require("./controllers/CreateUserController");
const AuthenticateUserController = require("./controllers/AuthenticateUserController");
const ensureAuthenticated = require("./middleware/ensureAuthenticated");

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/create', new CreateUserController().handle)
router.post('/authenticate', new AuthenticateUserController().handle)

module.exports = router;