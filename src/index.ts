
import express from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

// configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// configurações de rotas
app.use(statusRoute);
app.use(usersRoute);

// iniciando o servidor
app.listen(3000, () =>{
    console.log('Aplicação Executando na porta 3000!');
});
