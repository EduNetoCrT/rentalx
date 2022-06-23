
import { response, request, Router } from "express";
import {v4 as uuidv4 } from 'uuid';
import Category from "../model/Category";
import CategoriesRepository from "../repositories/CategoriesRepository";


const categoriesRepository = new CategoriesRepository();

const categoryRouter = Router();

//isso paodria ser uma tabela no banco de dados;
//const  categories : Category [] = [];

categoryRouter.post('/categories', (request , response) => {
    const  {name, description } = request.body;

    const categoryExist = categoriesRepository.findBind(name);

    if(categoryExist){
        return response.json({err: "Categoria já existe"});
    }
    categoriesRepository.create({name, description});
    
});

categoryRouter.get('/categories', (request, response) => {
   
   const all = categoriesRepository.list();

   return response.json(all)
    
})


export default categoryRouter;