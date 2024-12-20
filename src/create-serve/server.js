

import { cors, express } from '../bookstores/bookstores.js';
import createProject from '../routes/create-projects.js';


const app = express();
app.use( cors() );
app.use( express.json() );

app.use('/api', createProject);


/**
 * 
 * @param {string} port 
 */ 
export const server = ( port )=> {
    
    app.listen( port, () => {

        console.log(`Servidor corriendo en el puerto: ${ port }`);

    } );

};

