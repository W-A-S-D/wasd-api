const CreateSectorService = require("../../services/SectorService/CreateSectorService");

class CreateSectorController {
    async handle(request, response) {
        const image = request.file;
        const { fk_usuario, jogo } = request.body;
        console.log(image)
        console.log(request.body)

        const service = new CreateSectorService();

        try {
            const result = await service.execute(parseInt(fk_usuario), jogo, image.path);

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}

module.exports = CreateSectorController;