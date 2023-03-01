//vai conectar com o banco e passar para o arquivo de rotas, 
//a instância do express para utilizarmos as rotas 
import express  from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de Conexão'))
db.once("open", () => {
    console.log('conexão com o banco feita com sucessos')
})

const app = express();
app.use(express.json());
routes(app);

export default app