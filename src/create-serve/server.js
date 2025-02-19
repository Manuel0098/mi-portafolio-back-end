

import { cors, express } from '../bookstores/bookstores.js';
import { user } from '../create-user/create-user.js';
import { login } from '../login-user/login-user.js';
import { route } from '../routes/create-projects.js';
import session from 'express-session';


const app = express();
app.use( cors() );
app.use( express.json() );

app.use('/api', route );
app.use('/api', user );
app.use('/api', login);

/**
 * 
 * @param {string} port 
 */ 
export const server = ( port )=> {
    
    app.listen( port, () => {

        console.log(`Servidor corriendo en el puerto: ${ port }`);

    } );

};

