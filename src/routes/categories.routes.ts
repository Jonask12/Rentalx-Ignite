import { request, response, Router } from "express";
import { CategoriesRepositories } from "../repositories/CategoriesRepositories";

const categoriesRoutes = Router();
const categoriesRepositories = new CategoriesRepositories();


categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
   categoriesRepositories.create({ name, description});

   const categoryAlreadyExists = categoriesRepositories.findByName(name);

   if (categoryAlreadyExists) {
    return response.status(400).json({ error: "Category Already exists!"});
   }
  
  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const allCategories = categoriesRepositories.list();

  return response.json(allCategories)
})


export { categoriesRoutes };