import path from 'path'
// since __dirname produces an error ReferenceError: __dirname is not defined in ES module scope
// console.log("absolute path", __dirname); 

// ES alternative to use is 
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
console.log("absolute path ", path.dirname(__filename)); 

const filePath = path.join('/users', 'ali-zentech', 'documents', 'file.txt');
console.log("join path ", filePath);  

console.log("path extention ", path.extname(filePath)) // get file extension

const somePath = '/users/john/../jane/documents/./file.txt';

console.log("normalize a path remove redundant . .. etc. ",path.normalize(somePath));

const fullPath = path.parse("/Users/ali-zentech/Desktop");
console.log("parse a path:", fullPath);
// parse a path: {
//     root: '/',
//     dir: '/Users/ali-zentech',
//     base: 'Desktop',
//     ext: '',
//     name: 'Desktop'
//   }