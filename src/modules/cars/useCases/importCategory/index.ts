import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepositories";
import { ImportCategoryController } from "./ImportCategorieController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepositoy = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepositoy);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController };