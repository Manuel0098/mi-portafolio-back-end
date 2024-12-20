import fs from 'fs';
import { json } from 'express';
import { multer, PrismaClient, Router } from '../bookstores/bookstores.js';


const route = Router();
const prisma = new PrismaClient();

const pathPublicFileSystem = '../client/public';
const pathImageFileSystem = '../client/public/upload-image';


if( !fs.existsSync( pathPublicFileSystem ) ){

    fs.mkdirSync( pathPublicFileSystem );

}if( !fs.existsSync( pathImageFileSystem ) ){

    fs.mkdirSync( pathImageFileSystem );
}



// const pathImageFileSystem = './src/upload-image';


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
    
    console.log( req.body);
    console.log(req.file);
    // console.log(req.file);

    // console.log(req.body.project_file[0].name);

    // console.log(req.files);


    await prisma.createProject.create({
        data:{
            name_project,
            name_technology,
            project_link,
            project_file: req.file.filename,

        }
    });

    res.send(`Imagen cargada en ${pathImageFileSystem}`);

} );


route.get('/show-projects', async( req, res )=>{

    // console.log(res);

    const result = await prisma.createProject.findMany();

    res.json(result)


});


route.put('/update-project/:id', uploadImageMiddleware.single('file'), async(req, res)=>{

    const { name_project, name_technology, project_link } = req.body;
    const { id } = req.params;
    console.log(id);

    const projectUpdate = await prisma.createProject.update({
       where:   { id: Number(id) },
       data:{
        name_project,
        name_technology,
        project_link,
        project_file: req.file.filename,
        } 
    })
    res.json( projectUpdate )

})


route.delete('/project-delete/:id', async(req, res)=>{

    const { id } = req.params;

    const numberId = parseInt(id);

    const projectDelete = await prisma.createProject.delete({
        where: { id: Number(id) }
    })
    res.json( projectDelete )
})


export default route;