import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function fetchData (urlApi){
    return fetch(urlApi)
};

// fetchData(`${API}/products`)
//     .then(response => response.json())  
//     .then(products => {
//         console.log(products);
//     })
//     .then(()=>{
//         console.log('hola');
//     }).catch(err => console.log(err));

fetchData(`${API}/products`)
    .then(response => response.json())  
    .then(products => {
        //mostramos todos los products.
        console.log(products)
        return fetchData(`${API}/products/${products[0].id}`);
    })
    .then(response => response.json())
    .then(product=> { 
        //mostramos el titulo del producto.
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`);
    }).then(response => response.json())
    .then(category => {
        //mostramos el nombre de la categoria de producto.
        console.log(category.name);
    }).catch(err => {
        console.log(err);
    }).finally(() => {  console.log('done'); });