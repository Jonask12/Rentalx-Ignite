import { Category } from "../../model/Category";
import { ICatetoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";
class CategoriesRepository implements ICatetoriesRepository{
  private categories: Category[];

  private static ISTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.ISTANCE) {
      CategoriesRepository.ISTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.ISTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    });
      
    this.categories.push(category);
  }

  list(): Category[]{
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export { CategoriesRepository }