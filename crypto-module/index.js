import crypto from 'crypto'; 

// many different type of encryption algorithms. 
// some examples
const sha256Hash = crypto.createHash('sha256').update("Ali zentech").digest('hex');
console.log('SHA-256 Hash:', sha256Hash);
const md5Hash = crypto.createHash('md5').update("Ali zentech").digest('hex');
console.log('md5 Hash:', md5Hash);
const sha1Hash = crypto.createHash('sha1').update("Ali zentech").digest('hex');
console.log('SHA1 Hash:', sha1Hash);

// genrally we store salt value with user. 
const salt = crypto.randomBytes(16).toString('hex');  

const saltedHash = crypto.createHash('sha256').update("Ali zentech" + salt).digest('hex');

console.log('Salt:', salt);
console.log('Hashing with Salt:', saltedHash);

// general use with password hashing to notr conpomise user password any way. salting adds extra security to it