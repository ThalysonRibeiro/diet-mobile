import { FastifyReply, FastifyRequest } from "fastify";
import { CreatNutritionService } from "../services/creatNutritionService";

export interface DataProps {
  name: string;
  weight: string;
  height: string;
  age: string;
  gender: string;
  objective: string;
  level: string;
}

class CreateNutritionCotroller {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, weight, height, age, gender, objective, level } =
      request.body as DataProps;
    console.log("Rota cham ada!!!!!!!");
    const createNutrition = new CreatNutritionService();
    const nutrition = await createNutrition.execute({
      name,
      weight,
      height,
      age,
      gender,
      objective,
      level,
    });
    reply.send(nutrition);
  }
}

export { CreateNutritionCotroller };
