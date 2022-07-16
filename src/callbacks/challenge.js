const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest();
    //abre la conexion a la api.
    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function(event){
        //validar el estado en que se encuentra.
        if (xhttp.readyState === 4 ){
            //respuesta del servidor, redireccion o error.
            if (xhttp.status === 200){
                callback(null,JSON.parse(xhttp.responseText));
            }else {
                const error = new Error('Error' + urlApi);
                return callback(error,null);
            }

            }
        }
        xhttp.send();
    }

   fetchData(`${API}/products`,function(error1,data1){
        //si la peticion me genera error me detendra toda la aplicacion.
        if(error1) return console.error(error1);
        //cuando la peticion es corrrecta paso esta info para recibir los datos.
        // paso el id del producto que quiero y la guardo en data2
        fetchData(`${API}/products/${data1[0].id}`,function(error2,data2){
            if (error2) return console.error(error2);
            // obtengo la informacion del data2
            fetchData(`${API}/categories/${data2?.category?.id}`,function(error3,data3) {
                if (error3) return console.error(error3);
                console.log(data1[0]);
                console.log(data2.title);
                console.log(data3.name);  
            })
        })
   })
