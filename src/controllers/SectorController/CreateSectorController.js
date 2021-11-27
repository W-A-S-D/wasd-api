const CreateSectorService = require("../../services/SectorService/CreateSectorService");

class CreateSectorController {
    async handle(request, response) {
        const { jogo, fk_usuario } = request.body;

        const service = new CreateSectorService();

        try {

            const result = await service.execute(parseInt(fk_usuario), jogo);

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}

module.exports = CreateSectorController;