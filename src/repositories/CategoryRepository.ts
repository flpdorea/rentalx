import { Category } from "../model/Category"

interface ICreateCategoryDTIO {
    name: string,
    description: string
}

class CategoriesRepository {
  private categories: Category[]

  constructor() {
    this.categories = []
  }

  create({name, description}: ICreateCategoryDTIO): void {
    const category = new Category()

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
  })

  this.categories.push(category)
  }

  list(): Category[] {
    return this.categories
  }
}

export { CategoriesRepository }
