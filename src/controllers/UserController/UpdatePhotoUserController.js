const UpdatePhotoUserService = require("../../services/UserService/UpdatePhotoUserService");

class UpdatePhotoUserController {
  async handle(request, response) {
    const image = request.file;
    const { idUser } = request.params;

    const service = new UpdatePhotoUserService();

    try {
      const result = service.execute(parseInt(idUser), image.path)

      return response.json(result);
    } catch (error) {
      return response.json({ error: error.message })
    }
  }
}

module.exports = UpdatePhotoUserController;