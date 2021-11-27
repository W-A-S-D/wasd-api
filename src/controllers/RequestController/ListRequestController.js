let ListRequestService = require('../../services/RequestService/ListRequestService');


class ListRequestController {
    handle = async(request, response) => {

        const { id } = request;

        const service = new ListRequestService();

        try {
            const result = await service.execute(id);

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}

module.exports = ListRequestController;