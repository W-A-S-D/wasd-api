let ListRequestService = require('../../services/RequestService/ListRequestService');


class ListRequestController {
    handle = async(request, response) => {
        const service = new ListRequestService();

        try {
            const result = await service.execute();

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}

module.exports = ListRequestController;