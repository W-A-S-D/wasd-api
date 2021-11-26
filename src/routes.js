let express = require("express");
let router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    }
});
const ensureAuthenticated = require("./middleware/ensureAuthenticated");

const CreateUserController = require("./controllers/UserController/CreateUserController");
const CreateCompanyController = require("./controllers/CompanyController/CreateCompanyController");
const AuthenticateUserController = require("./controllers/UserController/AuthenticateUserController");
const ListSectorsController = require("./controllers/SectorController/ListSectorsController");
const FindSectorByUserController = require("./controllers/SectorController/FindSectorByUserController");
const ListMachinesBySectorController = require("./controllers/MachineController/ListMachinesBySectorController");
const ListMachinesByStatusController = require("./controllers/MachineController/ListMachinesByStatusController");
const CreateSectorController = require("./controllers/SectorController/CreateSectorController");
const ListUsersController = require("./controllers/UserController/ListUsersController");
const ListUsersWithoutSector = require("./controllers/UserController/ListUsersWithoutSectorController");
const ListSectorsByCompanyController = require("./controllers/SectorController/ListSectorsByCompanyController");
const DeleteUserController = require("./controllers/UserController/DeleteUserController");
const UpdateUserController = require("./controllers/UserController/UpdateUserController");
const ListUsersByCompanyController = require("./controllers/UserController/ListUsersByCompanyController");
const FindUserByIdController = require("./controllers/UserController/FindUserByIdController");
const ListLogByMachineController = require("./controllers/LogController/ListLogByMachineController");
const ListLogDiscoByLogController = require("./controllers/LogController/ListLogDiscoByLogController");
const ListDiscoByMachineController = require("./controllers/MachineController/ListDiscoByMachinesController");
const CreateFuncController = require("./controllers/UserController/CreateFuncController");

router.get("/", function(req, res, next) {
    res.render("index", { title: "Express" });
});

//users
router.get("/users", new ListUsersController().handle);
router.get(
    "/users/company",
    ensureAuthenticated,
    new ListUsersByCompanyController().handle
);
router.get("/user", ensureAuthenticated, new FindUserByIdController().handle);
router.post("/create", new CreateUserController().handle);
router.get('/users/nosector', new ListUsersWithoutSector().handle);
router.post(
    "/create/func",
    ensureAuthenticated,
    new CreateFuncController().handle
);
router.post("/update", ensureAuthenticated, new UpdateUserController().handle);
router.post("/authenticate", new AuthenticateUserController().handle);
router.delete(
    "/delete/:idUser",
    ensureAuthenticated,
    new DeleteUserController().handle
);

// sectors
router.get("/sectors", new ListSectorsController().handle);
router.get(
    "/sectors/user",
    ensureAuthenticated,
    new FindSectorByUserController().handle
);
router.get(
    "/sectors/company",
    ensureAuthenticated,
    new ListSectorsByCompanyController().handle
);



router.post(
    "/sectors/create",
    upload.single("productImage"),
    ensureAuthenticated,
    new CreateSectorController().handle
);



//machines
router.get(
    "/machines/sector/:idSetor",
    new ListMachinesBySectorController().handle
);
router.get(
    "/machines/",
    ensureAuthenticated,
    new ListMachinesByStatusController().handle
);
router.get(
    "/discos/:idMaquina",
    ensureAuthenticated,
    new ListDiscoByMachineController().handle
);

//log
router.get(
    "/log/:idMaquina",
    ensureAuthenticated,
    new ListLogByMachineController().handle
);
router.get(
    "/logDisco/:idLog",
    ensureAuthenticated,
    new ListLogDiscoByLogController().handle
);

//company
router.post("/create/company", new CreateCompanyController().handle);

module.exports = router;