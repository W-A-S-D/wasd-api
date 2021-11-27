let prisma = require("../../prisma")

class UpdatePhotoUserService {
  async execute(idUser, avatar) {

    const user = await prisma.usuario.update({
      where: {
        usuario_id: idUser
      },
      data: {
        avatar
      }
    })

    return user;
  }
}

module.exports = UpdatePhotoUserService;