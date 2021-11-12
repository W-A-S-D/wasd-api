let express = require("express");
let router = express.Router();

const ensureAuthenticated = require("./middleware/ensureAuthenticated");

const CreateUserController = require("./controllers/CreateUserController");
const CreateCompanyController = require("./controllers/CreateCompanyController");
const AuthenticateUserController = require("./controllers/AuthenticateUserController");
const ListSectorsController = require('./controllers/ListSectorsController');
const FindSectorByUserController = require("./controllers/FindSectorByUserController");
const ListMachinesBySectorController = require("./controllers/ListMachinesBySectorController");
const ListMachinesByStatusController = require("./controllers/ListMachinesByStatusController");

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/create', new CreateUserController().handle)
router.post('/create-company', new CreateCompanyController().handle)
router.post('/authenticate', new AuthenticateUserController().handle)
router.get('/sectors', new ListSectorsController().handle)
router.get('/sectors/:id', new FindSectorByUserController().handle)
router.get('/machines/sector/:idSetor', new ListMachinesBySectorController().handle)
router.get('/machines/:idEmpresa', new ListMachinesByStatusController().handle)

module.exports = router;