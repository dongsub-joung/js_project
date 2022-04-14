let cluster= require(`cluster`);
let os= require(`os`);

let cpuCount= os.cpus().length;
console.log(`CPU Count:}`, cputCount);

if(cluster.isMaster){
    for(let i=0; i<cpuCount; i++){
        console.log(`cluseter.fork()`);
        cluseter.fork()
    }
} else{
    // worker process
    console.log(`log()`);
}