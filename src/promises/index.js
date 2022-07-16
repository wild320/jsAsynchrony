const promise = new Promise(function(resolve, reject) { 
    resolve('Hola!')
});

const cows = 9;

const countCows = new Promise(function(resolve, reject) {
    if(cows>10){
        resolve('We have Cows: '+cows + ' on the farm');
    }else{
        reject('There is not cows on the farm');
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
}).finally(() => console.log('done'));