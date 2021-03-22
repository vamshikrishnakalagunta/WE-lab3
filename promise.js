let p= new Promise(function(resolve,reject){
    let a=2,b=2;
    if(a==b)
        resolve();
    else
        reject();
});
p.then(function(){
    console.log("resolve executed");
}).catch(function(){
    console.log("reject executed");
})