import * as CryptoJS from "crypto-js";

class Block{
    public index: number;
    public hash: string;
    public previsouHash: string;
    public data: string;
    public timestamp: number;

    static calculateBalckHash= (index: number,
        hash: string,
        previsouHash: string,
        data: string,
        timestamp: number) => {
            CryptoJS.SHA256(index + previsouHash + timestamp + data).toString();
        };

    constructor(index: number,
        hash: string,
        previsouHash: string,
        data: string,
        timestamp: number){
            this.index= index;
            this.hash= hash;
            this.previsouHash= previsouHash;
            this.data= data;
            this.timestamp= timestamp;
        }
}

const genesisBlock: Block= new Block(0, "20202020202", "", "hello", 123456);

let blockchain: [Block]= [genesisBlock];

// @ERR void' nor 'any'
const getBlockChain= () : Block[] => {
    blockchain;
}
const getLatesBlock= (): Block => {
    blockchain(blockchain.length-1);
}

const getNEwTimeStape= (): number => Math.round(new Date.getTime()/1000);

export{};