import os from 'os'; 

console.log('Platform:', os.platform()); 
console.log('Architecture:', os.arch()); 
console.log('CPU Information:', os.cpus()); 
console.log('Total Memory in GB:', os.totalmem()/Math.pow(1024,3));
console.log('Free Memory in  GB:', os.freemem()/Math.pow(1024,3));
console.log('Hostname:', os.hostname());
console.log('Uptime in min:', os.uptime()/60);
console.log('Home Directory:', os.homedir());
