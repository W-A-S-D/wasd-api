const CreateSectorService = require("../../services/SectorService/CreateSectorService");

class CreateSectorController {
    async handle(request, response) {
        const { fk_usuario, jogo, avatar_jogo } = request.body;

        const service = new CreateSectorService();

        try {
            const result = await service.execute(fk_usuario, jogo, avatar_jogo);

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}

module.exports = CreateSectorController;