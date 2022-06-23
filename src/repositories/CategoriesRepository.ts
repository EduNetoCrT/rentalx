import Category from "../model/Category";

interface ICreateCategoryDTO{
    name: string,
    description: string
};


class CategoriesRepository {

    private categories : Category[];



    constructor(){
        this.categories = [];
    }

    //verificar a existencia 
    findBind(name: string): Category{
        const category = this.categories.find(category => category.name === name)
        return category;
    }
    //criação
    create({name, description}: ICreateCategoryDTO): any {
        const newCategory = new Category();

        Object.assign(newCategory, {
            name, description, created_at: new Date()
            
        });

        this.categories.push(newCategory);
    }
    //listagem
    list(): Category[] {
        return this.categories;
    }

}


export default CategoriesRepository;