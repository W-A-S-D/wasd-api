let UpdateRequestService = require('../../services/RequestService/UpdateRequestService.js')


class UpdateRequestController {
    handle = async(request, response) => {
        let { id, status } = request.body;

        const service = new UpdateRequestService();

        try {
            let result = await service.execute(id, status);
            return response.json(result);

        } catch (error) {
            return response.json({ error: error.message });
        }
    }

}

module.exports = UpdateRequestController;