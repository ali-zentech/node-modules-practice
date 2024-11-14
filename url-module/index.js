import url from 'url';

const ex_url = new URL("https:localhost:8080/api/v1/users?user_id=12345")
console.log(ex_url)
// URL {
//     href: 'https://localhost:8080/api/v1/users?user_id=12345',
//     origin: 'https://localhost:8080',
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'localhost:8080',
//     hostname: 'localhost',
//     port: '8080',
//     pathname: '/api/v1/users',
//     search: '?user_id=12345',
//     searchParams: URLSearchParams { 'user_id' => '12345' },
//     hash: ''
//   }

// similarly we can re construct a url 
const urlObject = {
    protocol: 'https:',
    hostname: 'www.localhost.com',
    pathname: '/products',
    search: '?category=electronics&sort=price'
  };
console.log(url.format(urlObject))
// https://www.localhost.com/products?category=electronics&sort=price

// get querry parameters 
console.log(ex_url.searchParams.get('user_id'));
// maluplate a url
ex_url.searchParams.set("user_id", "123456")
console.log(ex_url)
// add parameter to url 
ex_url.searchParams.append("name", "ali")
console.log(ex_url)