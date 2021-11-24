let FindSectorByUserService = require('../../services/SectorService/FindSectorByUserService');



class FindSectorByUserController {
    handle = async(request, response) => {
        const { user_id } = request;

        const service = new FindSectorByUserService();

        try {
            const result = await service.execute(parseInt(user_id));

            return response.json(result);
        } catch (error) {
            return response.json(error);
        }
    }
}


module.exports = FindSectorByUserController;