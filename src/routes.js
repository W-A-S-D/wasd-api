let express = require("express");
let router = express.Router();
const CreateUserController = require("./controllers/CreateUserController");

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/create', new CreateUserController().handle)


module.exports = router;