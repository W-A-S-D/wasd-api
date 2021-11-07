let FindSectorByUserService = require('../services/FindSectorByUserService');



class FindSectorByUserController {
    handle = async(request, response) => {
        const { id } = request.params;

        const service = new FindSectorByUserService();

        try {
            const result = await service.execute(parseInt(id));

            return response.json(result);
        } catch (error) {
            return response.json(error);
        }
    }
}


module.exports = FindSectorByUserController;