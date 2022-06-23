import express from 'express';
import categoryRouter from './router/category.routes';


const app = express();
const port = 3300;

app.use(express.json());

app.use(categoryRouter);

app.use((req, res) =>{
    res.json({msg:"Endpoint não encontrado"})
});

app.listen(port, () => console.log(`Servidor rodando na porta, ${port}`));
