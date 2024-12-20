// import express from ('express');
// const app = express();
// import cors from ('cors');
// import { PrismaClient } from ('@prisma/client');

// import { server } from "./create-serve/server";
import {server} from './create-serve/server.js';

const port = '3001';

server(port);










// app.use( cors() );
// app.use(express.json());

// const port = 3001;

// app.listen(port, ()=>{

//     console.log(`Servidor corriendo en el puerto ${port}`);

// })


// app.post('/add',(req, res)=>{

//     const project_name = req.body.project_name;
//     const technology_name = req.body.technology_name;
//     const project_link = req.body.project_link;
//     const project_file = req.body.project_file;

//     // console.log(name_technology);

//     const prisma = new PrismaClient();

//     console.log(prisma);
//     // const newProject = prisma.logModel.create({
//     //     data: {
//     //         project_name,
//     //         technology_name,
//     //         project_link,
//     //         project_file
//     //     }
//     // })
// })

