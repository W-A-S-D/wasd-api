# WASD-API


> Uma API desenvolvida para alimentar a dashboard do nosso projeto!


## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
<!---Estes são apenas requisitos de exemplo. Adicionar, duplicar ou remover conforme necessário--->
* Você instalou a versão mais recente de `<Node / Git / Yarn>`
* Você tem o seu .env configurado. 
* Se estiver utilizando o ambiente local, ter o banco em MYSQL com o user configurado `<http://lnnk.in/jubn>`.

## 🚀 Instalando

Para instalar a WASD-API, siga estas etapas:


```
git clone https://github.com/W-A-S-D/wasd-api.git
```

## ☕ Como usar?

Para usar a API, siga estas etapas:

Instale as dependências:

```
npm i
```

## 👾 Gere o prisma client:

```
npx prisma generate 
```

Obs: Caso seu schema esteja desatualizado:

```
npx prisma db pull
```



## ✔ Rodando a api com npm:

```
npm run dev
```

ou 


```
node run dev
```

## ✔ Rodando a api com yarn:

```
yarn dev
```


‼ Não se esqueça de verificar se o arquivo .env está no seu repositório!!

## 📫 Contribuindo para o projeto
<!---Se o seu README for longo ou se você tiver algum processo ou etapas específicas que deseja que os contribuidores sigam, considere a criação de um arquivo CONTRIBUTING.md separado--->
Para contribuir com o projeto, siga estas etapas:

1. Clone este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'` (Lembre-se que o padrão dos commits é em inglês)
4. Envie para o branch original: `git push origin <branch>` 
5. Crie a PR.

Como alternativa, consulte a documentação do GitHub em [como criar uma pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
