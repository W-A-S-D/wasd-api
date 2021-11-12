let express = require("express");
let router = express.Router();

const ensureAuthenticated = require("./middleware/ensureAuthenticated");

const CreateUserController = require("./controllers/UserController/CreateUserController");
const CreateCompanyController = require("./controllers/CompanyController/CreateCompanyController");
const AuthenticateUserController = require("./controllers/UserController/AuthenticateUserController");
const ListSectorsController = require('./controllers/CompanyController/ListSectorsController');
const FindSectorByUserController = require("./controllers/MachineController/FindSectorByUserController");
const ListMachinesBySectorController = require("./controllers/MachineController/ListMachinesBySectorController");
const ListMachinesByStatusController = require("./controllers/MachineController/ListMachinesByStatusController");

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