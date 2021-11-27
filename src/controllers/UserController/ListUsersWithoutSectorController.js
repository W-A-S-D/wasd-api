let ListUsersWithoutSectorService = require('../../services/UserService/ListUsersWithoutSectorService');


class ListUsersWithoutSectorController {
    handle = async(request, response) => {
        const service = new ListUsersWithoutSectorService();

        try {
            const result = await service.execute();

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}

module.exports = ListUsersWithoutSectorController;