const p = new Promise(function(resolve,reject){
    for(let i = 1;i<10;i++){
        let rnmb = parseInt(Math.fround(Math.random()*100))
        if(rnmb%2==0){
            console.log(rnmb,'是一个偶数');
            resolve();
        }else{
            console.log(rnmb,'是一个奇数');
            reject();
        }
    }
})
p.then(function(value){
    console.log(typeof value)
    // console.log(typeof value)
},function(reason){
    console.log()
})
