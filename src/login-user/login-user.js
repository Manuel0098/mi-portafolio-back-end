import { Router, PrismaClient, bcrypt } from '../bookstores/bookstores.js';

const login = Router();
const prisma = new PrismaClient();

login.post('/login', async( req, res )=>{

    const { email, password } = req.body;

    try{
        // Aca buscamos el usuario en la base de datos
        const user = await prisma.createUser.findUnique({
            where: { email }
        });

        if( user && await bcrypt.compare( password, user.password ) ){

            // Aca puedes establecer una sesion o un token de acceso
            res.send( 'Inicio de sesion existoso' );

            return;
        };

        res.status( 401 ).send(' Credenciales incorrectas ');
        // res.send(' Credenciales incorrectas ').status(401);

    }catch( error ){
        res.status( 500 ).send(`Error al tratar de iniciar sesion: 
            ${ error }`);
    };
    
});


export {
    login
}