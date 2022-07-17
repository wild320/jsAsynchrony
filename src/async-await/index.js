const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve('Hi there'), 200) 
        : reject(new Error('Error!!!'));
    });
}

const anotherFnAsync = async() => {
    const something = await fnAsync();
    console.log(something);
    console.log('done');
}

console.log('before async');
anotherFnAsync();
console.log('after async');