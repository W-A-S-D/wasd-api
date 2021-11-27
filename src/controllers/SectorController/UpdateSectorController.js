const UpdateSectorService = require("../../services/SectorService/UpdateSectorService");

class UpdateSectorController {
  async handle(request, response) {

    const image = request.file;
    const { idSector } = request.params;
    console.log(idSector)

    const service = new UpdateSectorService();

    try {

      const result = await service.execute(parseInt(idSector), image.path);

      return response.json(result);
    } catch (error) {
      return response.json({ error: error.message })
    }
  }
}

module.exports = UpdateSectorController;