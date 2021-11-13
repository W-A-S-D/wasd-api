let ListUsersService = require('../../services/UserService/ListUsersService');


class ListUsersController {
    handle = async(request, response) => {
        const service = new ListUsersService();

        try {
            const result = await service.execute();

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}

module.exports = ListUsersController;