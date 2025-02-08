import { Router, PrismaClient, bcrypt } from '../bookstores/bookstores.js';
// import bcrypt from 'bcrypt';


const user = Router();
const prisma = new PrismaClient();

user.post( '/register', async( req, res )=>{

    console.log(req.body);
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash( password, 10 );

    // console.log(email, hashedPassword);

    try {

        const user = await prisma.createUser.create({
            data: {
                email,
                password: hashedPassword,
            }
        });

        res.send(`Usuario creado con el email: ${ user }`);

    } catch (error) {
        
        res.status( 500 ).send( `Error al crear el usuario: 
            ${error}` );
    };

});

export {
    user
};