import { PrismaClient, Router } from '../bookstores/bookstores.js';

const route = Router();
const prisma = new PrismaClient();

route.get('/', (req, res)=>{
    res.send('Hello word')
});

route.post( '/create-project', async(req, res)=>{
        
    const { name_project, name_technology, project_link, project_file } = req.body;

    await prisma.createProject.create({
        data:{
            name_project,
            name_technology,
            project_link,
            project_file,

        }
    });

    res.json( {
        status: 200,
        success: true,
        data: `Proyecto creado...`,
    } );

} );


route.get('/show-projects', async( req, res )=>{

    const result = await prisma.createProject.findMany();

    res.json(result)

});


route.put('/update-project/:id', async(req, res)=>{

    const { id } = req.params;
    const { name_project, name_technology, project_link, project_file } = req.body;

    await prisma.createProject.update({
       where:   { id: Number(id) },
       data:{
        name_project,
        name_technology,
        project_link,
        project_file,
        } 
    })
    res.json( {
        status: 200,
        success: true,
        data: `Proyecto actualizado...`,
    } );
});


route.delete('/project-delete/:id', async(req, res)=>{

    const { id } = req.params;

    await prisma.createProject.delete({
        where: { id: Number(id) }
    });

    res.send('Proyecto eliminado...');
    
});

export {
    route,
};

