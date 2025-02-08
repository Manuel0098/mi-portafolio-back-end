import { fs, multer, PrismaClient, Router } from '../bookstores/bookstores.js';
import deleteImgFileSystem from '../delete-img-file-system/delete-img-file-system.js';


const route = Router();
const prisma = new PrismaClient();

const pathPublicFileSystem = '../client/public';
const pathImageFileSystem = '../client/public/upload-image';


if( !fs.existsSync( pathPublicFileSystem ) ){

    fs.mkdirSync( pathPublicFileSystem );

}if( !fs.existsSync( pathImageFileSystem ) ){

    fs.mkdirSync( pathImageFileSystem );
}


const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, pathImageFileSystem)
    },
    filename: (req, file, callback)=>{
        const ext = file.originalname.split('.').pop();

        callback(null, `${Date.now()}.${ext}`);
    }
});

const uploadImageMiddleware = multer({storage});



route.post( '/create-project', uploadImageMiddleware.single('file'), async(req, res)=>{

    
    const { name_project, name_technology, project_link, project_file } = req.body;

    await prisma.createProject.create({
        data:{
            name_project,
            name_technology,
            project_link,
            project_file: req.file.filename,

        }
    });

    res.send(`Proyecto creado`);

} );


route.get('/show-projects', async( req, res )=>{


    const result = await prisma.createProject.findMany();

    res.json(result)


});


route.put('/update-project/:id', uploadImageMiddleware.single('file'), async(req, res)=>{

    const { id } = req.params;
    const { name_project, name_technology, project_link } = req.body;
    const project_file = req.file.filename; 

    const projectUpdate = await prisma.createProject.update({
       where:   { id: Number(id) },
       data:{
        name_project,
        name_technology,
        project_link,
        project_file,
        } 
    })
    res.send( `Proyecto actualizado` );
});


route.delete('/project-delete/:id', async(req, res)=>{

    const { id } = req.params;

    const projectDelete = await prisma.createProject.delete({
        where: { id: Number(id) }
    });

    res.json( projectDelete );
    
});


route.delete( '/image-delete-file-system/:project_file', async( req, res )=>{

    const { project_file } = req.params;

    await deleteImgFileSystem( project_file );

});


export {
    route,
    pathImageFileSystem,
};

