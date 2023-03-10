import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  constructor(private importCategoryUseCate: ImportCategoryUseCase) {}
  handle(request: Request, response: Response) : Response {
    const { file } = request;
    this.importCategoryUseCate.execute(file)
    
    return response.send();
  }
}
export { ImportCategoryController }