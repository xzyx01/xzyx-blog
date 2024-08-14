function fn(){
    let a = 0;
    return function (){
        console.log(a++)
    }
}
let res = fn();
res();
res();