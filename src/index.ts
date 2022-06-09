import express from 'express';
import { categoriesRoutes } from './routers/categories.routes';

const app = express();
const port = 3300;

app.use(express.json());
app.use(categoriesRoutes);

app.post('/cursos', (request, response) => {
    const {name} = request.body;

    return response.json({name})
})
app.use((req, res) =>{
    res.json({msg:"Endpoint não encontrado"})
});

app.listen(port, () => console.log(`Servidor rodando na porta, ${port}`));
