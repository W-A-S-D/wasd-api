const prisma = require("../../prisma");
const FindUserByIdService = require("../UserService/FindUserByIdService");

class ListMachinesService {
  async execute(user_id) {
    const user = await new FindUserByIdService().execute(user_id);

    const accountTotalMachines = await prisma.maquina.count({
        where: {
            setor: {
              usuario: {
                fk_empresa: user.fk_empresa,
              },
            },
          },
    })

    const accountNormalMachines = await prisma.maquina.count({
        where: {
          status: "Normal",
          setor: {
            usuario: {
              fk_empresa: user.fk_empresa,
            },
          },
        },
      });


    const accountAttentionMachines = await prisma.maquina.count({
      where: {
        status: "Atenção",
        setor: {
          usuario: {
            fk_empresa: user.fk_empresa,
          },
        },
      },
    });

    const accountAlertMachines = await prisma.maquina.count({
      where: {
        status: "Alerta",
        setor: {
          usuario: {
            fk_empresa: user.fk_empresa,
          },
        },
      },
    });

    if (!accountTotalMachines) {
      throw new Error("Impossible to reach");
    }

    return { accountAlertMachines, accountAttentionMachines, accountNormalMachines, accountTotalMachines };
  }
}

module.exports = ListMachinesService;
