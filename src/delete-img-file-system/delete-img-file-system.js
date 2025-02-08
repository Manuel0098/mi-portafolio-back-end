import { fs } from '../bookstores/bookstores.js';
import { pathImageFileSystem } from '../routes/create-projects.js';


const deleteImgFileSystem = async( nameImage )=> {


    fs.unlinkSync( `${ pathImageFileSystem }/${ nameImage }` );
    
    try{
        
        console.log( `Imagen eliminada: ${ nameImage }` );
    }
    catch(err){
        
        console.log( `Error al tratar de eliminar la imagen: `, err )
        
    };
}

export default deleteImgFileSystem;