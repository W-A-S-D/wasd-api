let express = require("express");
let router = express.Router();
const CreateUserController = require("./controllers/CreateUserController");
const CreateCompanyController = require("./controllers/CreateCompanyController");
const AuthenticateUserController = require("./controllers/AuthenticateUserController");
const ListSectorsController = require('./controllers/ListSectorsController');
const ensureAuthenticated = require("./middleware/ensureAuthenticated");
const FindSectorByUserController = require("./controllers/FindSectorByUserController");

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/create', new CreateUserController().handle)
router.post('/create-company', new CreateCompanyController().handle)
router.post('/authenticate', new AuthenticateUserController().handle)
router.get('/sectors', new ListSectorsController().handle)
router.get('/sectors/:id', new FindSectorByUserController().handle)

module.exports = router;