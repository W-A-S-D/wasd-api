let prisma = require("../../prisma");

class CreateCompanyService {
    async execute(
        nome,
        email,
        cnpj,
        logradouro,
        numero,
        bairro,
        cidade,
        uf,
        cep,
        telefone
    ) {
        let company = await prisma.empresa.findFirst({
            where: {
                cnpj,
            },
        });

        if (!company) {
            company = await prisma.empresa.create({
                data: {
                    nome,
                    email_empresarial: email,
                    cnpj,
                    logradouro,
                    numero,
                    bairro,
                    cidade,
                    uf,
                    cep,
                    telefone,
                },
            });
        }

        return company;
    }
}

module.exports = CreateCompanyService;