import { create } from "domain";
import { request, Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";



const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();



categoriesRoutes.post('/categories', (request, response) => {
    
    const {name, description } =  request.body;

    const categoruExist = categoriesRepository.findByName(name);

    if(categoruExist){
        return response.json({msg: 'Categoria existente'});
    }else {
        categoriesRepository.create({name,description} )

        return response.status(200).send();
    }

    

});


categoriesRoutes.get('/categories', (request, response) => {
    const all = categoriesRepository.list();

    return response.json(all)
})



export { categoriesRoutes}