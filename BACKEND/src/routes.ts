import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateNutritionCotroller } from "./controllers/createNutritionCotroller";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
    let responseText =
      '```json\n{\n  "nome": "Rafael",\n  "sexo": "undefined",\n  "idade": 32,\n  "altura": 1.72,\n  "peso": 65,\n  "objetivo": "Hipertrofia",\n  "refeicoes": [\n    {\n      "horario": "08:00",\n      "nome": "Café da Manhã",\n      "alimentos": [\n        "2 fatias de pão integral",\n        "2 ovos mexidos com 1 fatia de queijo minas",\n        "1 banana",\n        "1 copo de leite desnatado"\n      ]\n    },\n    {\n      "horario": "10:30",\n      "nome": "Lanche da Manhã",\n      "alimentos": [\n        "1 iogurte grego com granola e frutas vermelhas"\n      ]\n    },\n    {\n      "horario": "13:00",\n      "nome": "Almoço",\n      "alimentos": [\n        "150g de frango grelhado",\n        "1 xícara de arroz integral",\n        "1 xícara de brócolis",\n        "1 batata doce média cozida"\n      ]\n    },\n    {\n      "horario": "15:30",\n      "nome": "Lanche da Tarde",\n      "alimentos": [\n        "1 scoop de whey protein",\n        "1 fruta (maçã ou laranja)"\n      ]\n    },\n    {\n      "horario": "19:00",\n      "nome": "Jantar",\n      "alimentos": [\n        "150g de peixe grelhado",\n        "1 xícara de quinoa",\n        "1 xícara de couve",\n        "1 batata doce média cozida"\n      ]\n    },\n    {\n      "horario": "21:00",\n      "nome": "Lanche da Noite",\n      "alimentos": [\n        "1 pote de iogurte desnatado com 1 colher de sopa de chia"\n      ]\n    }\n  ],\n  "suplementos": [\n    "Whey Protein",\n    "Creatina",\n    "Glutamina",\n    "BCAA"\n  ]\n}\n```';

    try {
      //Extrair o  JSON
      let jsonString = responseText
        .replace(/```\w*/g, "")
        .replace(/\n```/g, "")
        .trim();

      let jsonObject = JSON.parse(jsonString);

      return reply.send({ data: jsonObject });
    } catch (err) {
      console.log(err);
    }

    reply.send({ ok: true });
  });

  fastify.post(
    "/create",
    async (request: FastifyRequest, replay: FastifyReply) => {
      return new CreateNutritionCotroller().handle(request, replay);
    }
  );
}
