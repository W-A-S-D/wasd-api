let prisma = require("../../prisma")

class UpdateSectorService {
  execute = async (idSetor, avatar_jogo) => {
    console.log(idSetor)
    
    let sector = await prisma.setor.update({
      where: {
        setor_id: idSetor
      },
      data: {
        avatar_jogo
      }
    });

    return sector;
  }
}

module.exports = UpdateSectorService;