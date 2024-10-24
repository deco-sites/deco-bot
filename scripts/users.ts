// Import required Deno APIs
const users = [
  {
    "__resolveType": "github-bot/loaders/user.ts",
    "user": {
      "discordId": "112330480170328064",
      "githubUsername": "matheusgr",
      "name": "Gaudencio",
    },
  },
  {
    "__resolveType": "github-bot/loaders/user.ts",
    "user": {
      "discordId": "1053767993252925491",
      "githubUsername": "hugo-ccabral",
      "name": "Hugo",
    },
  },
  {
    "__resolveType": "github-bot/loaders/user.ts",
    "user": {
      "discordId": "266642125146292224",
      "githubUsername": "lucis",
      "name": "Lucis",
    },
  },
  {
    "__resolveType": "github-bot/loaders/user.ts",
    "user": {
      "discordId": "336957070743961605",
      "githubUsername": "guitavano",
      "name": "Tavano",
    },
  },
  {
    "__resolveType": "github-bot/loaders/user.ts",
    "user": {
      "discordId": "87899733435088896",
      "githubUsername": "igorbrasileiro",
      "name": "Brasileiro",
    },
  },
  {
    "__resolveType": "github-bot/loaders/user.ts",
    "user": {
      "discordId": "373477804815417345",
      "githubUsername": "viktormarinho",
      "name": "Camudo",
    },
  },
  {
    "__resolveType": "github-bot/loaders/user.ts",
    "user": {
      "discordId": "123803347424772098",
      "githubUsername": "mcandeia",
      "name": "Candeia",
    },
  },
  {
    "__resolveType": "github-bot/loaders/user.ts",
    "user": {
      "discordId": "245378384874438658",
      "githubUsername": "caroluchoa",
      "name": "Carol",
    },
  },
  {
    "__resolveType": "github-bot/loaders/user.ts",
    "user": {
      "discordId": "605547974122274827",
      "githubUsername": "andriellyll",
      "name": "Drica",
    },
  },
  {
    "__resolveType": "github-bot/loaders/user.ts",
    "user": {
      "discordId": "497873306108821534",
      "githubUsername": "IgorArthur",
      "name": "Estrangeiro",
    },
  },
  {
    "__resolveType": "github-bot/loaders/user.ts",
    "user": {
      "discordId": "689171060662599784",
      "githubUsername": "tlgimenes",
      "name": "Gimenes",
    },
  },
  {
    "__resolveType": "github-bot/loaders/user.ts",
    "user": {
      "discordId": "341708846730838018",
      "githubUsername": "monuelo",
      "name": "Hericles",
    },
  },
  {
    "__resolveType": "github-bot/loaders/user.ts",
    "user": {
      "discordId": "722457534648025158",
      "githubUsername": "jovenan",
      "name": "Jonatas Venancio",
    },
  },
  {
    "__resolveType": "github-bot/loaders/user.ts",
    "user": {
      "discordId": "698256218627768371",
      "githubUsername": "viniciustrr",
      "name": "Vinicius Trindade",
    },
  },
  {
    "__resolveType": "github-bot/loaders/user.ts",
    "user": {
      "discordId": "1278405766906249459",
      "githubUsername": "josemiguel",
      "name": "José Miguel",
    },
  },
  {
    "__resolveType": "github-bot/loaders/user.ts",
    "user": {
      "discordId": "539934514030313484",
      "githubUsername": "joaovictorgb",
      "name": "João Victor",
    },
  },
  {
    "__resolveType": "github-bot/loaders/user.ts",
    "user": {
      "discordId": "305184673355661312",
      "githubUsername": "nathanluiz33",
      "name": "Nathan",
    },
  },
  {
    "__resolveType": "github-bot/loaders/user.ts",
    "user": {
      "discordId": "364112037552586772",
      "githubUsername": "ItamarRocha",
      "name": "Itamar",
    },
  },
  {
    "__resolveType": "github-bot/loaders/user.ts",
    "user": {
      "discordId": "467523200692256768",
      "githubUsername": "vitortrindader",
      "name": "Vitor Trindade",
    },
  },
  {
    "__resolveType": "github-bot/loaders/user.ts",
    "user": {
      "discordId": "1245049057878085663",
      "githubUsername": "Gmantiqueira",
      "name": "Mantiqueira",
    },
  },
];

function createUserFiles() {
  for (const userData of users) {
    // Capitalize e encode o nome do usuário
    const fileName = encodeURIComponent(
      userData.user.name
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
    ) + ".json";

    // Criar o arquivo
    Deno.writeTextFileSync(
      `./.deco/blocks/${fileName}`,
      JSON.stringify(
        {
          ...userData,
          user: {
            discordId: userData.user.discordId,
            githubUsername: userData.user.githubUsername,
          },
        },
        null,
        2,
      ),
    );

    console.log(`Arquivo ${fileName} criado com sucesso!`);
  }
}

// Executar a função
createUserFiles();
