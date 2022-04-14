// https://nodejs.org/api/cluster.html

import cluster from 'cluster';
import http from 'http';
import { cpus } from 'os';
import process from 'process';ss from `process`;

const numCPUs= cpus().length;

if (cluster.isPrimary){
    console.log(`primary ${process.pid} is running`);

    // fork workers
    for(let i= 0; i<numCPUs; i++){
        cluster.fork();
    }

    cluster.on(`exit`, (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    // worekrs can share any TCP connection
    // In this case it is an HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`hello work\n`);
    }).listen(8000);

    console.log(`worker ${process.pid} started`);
}