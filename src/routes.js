let express = require("express");
let router = express.Router();

const ensureAuthenticated = require("./middleware/ensureAuthenticated");

const CreateUserController = require("./controllers/UserController/CreateUserController");
const CreateCompanyController = require("./controllers/CompanyController/CreateCompanyController");
const AuthenticateUserController = require("./controllers/UserController/AuthenticateUserController");
const ListSectorsController = require('./controllers/SectorController/ListSectorsController');
const FindSectorByUserController = require("./controllers/SectorController/FindSectorByUserController");
const ListMachinesBySectorController = require("./controllers/MachineController/ListMachinesBySectorController");
const ListMachinesByStatusController = require("./controllers/MachineController/ListMachinesByStatusController");
const CreateSectorController = require("./controllers/SectorController/CreateSectorController");
const ListUsersController = require("./controllers/UserController/ListUsersController");
const ListSectorsByCompanyController = require("./controllers/SectorController/ListSectorsByCompanyController");

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

//users
router.get('/users', new ListUsersController().handle);

router.post('/create', new CreateUserController().handle)
router.post('/authenticate', new AuthenticateUserController().handle)

// sectors
router.get('/sectors', new ListSectorsController().handle)
router.get('/sectors/:id', new FindSectorByUserController().handle)

router.post('/sectors/create', new CreateSectorController().handle);
router.post('/sectors', new ListSectorsByCompanyController().handle)


//machines
router.get('/machines/sector/:idSetor', new ListMachinesBySectorController().handle)
router.get('/machines/:idEmpresa', new ListMachinesByStatusController().handle)


//company 
router.post('/create-company', new CreateCompanyController().handle)


module.exports = router;