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

    static validatedStructure= (aBlock: Block): boolean => {
        typeof aBlock.index === "number" &&
        typeof aBlock.hash === "string" &&
        typeof aBlock.previsouHash === "string" &&
        typeof aBlock.timestamp === "number" &&
        typeof aBlock.data === "string" 
    }    

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
};

const genesisBlock: Block= new Block(0, "20202020202", "", "hello", 123456);

let blockchain: [Block]= [genesisBlock];

// @ERR     void' nor 'any'
// @SOLVE   return type
const getBlockChain= () : Block[] => {
    blockchain;
}
const getLatesBlock= (): Block => {
    blockchain(blockchain.length-1);
}

const getNEwTimeStape= (): number => Math.round(new Date.getTime()/1000);

const createNewBlock= (Date: string): Block => {
    const previouseBlock: Blcok= getLatesBlock();
    const newIndex: number= previouseBlock.index + 1;
    const newTimeStamp: number= Block.getNEwTimeStape();
    const newHash: String= Block.calculateBalckHash(
        newIndex, previouseBlock.hash,
        newTimeStamp, data,
    );

    const newBlock: Block= new Block(
        newIndex, newHash,
        previouseBlock.hash,
        data, newTimeStamp
    );
    addBlcok(newBlock);
    return newBlock;
};

const getHashforBlock= (aBlock: Block): string => {
    Block.calculateBalckHash(aBlock.index, aBlock.previsouHash, aBlock.timestamp, aBlock.data);
}

const isBalckValid= (candidateBlock: Block, previouseBlock: Block): boolean{
    if(Block.validatedStructure(candidateBlock)){
        return false;
    } else if (previouseBlock.index + 1 !== candidateBlock.index){
        return false;
    } else if( previouseBlock.hash !== candidateBlock.previsouHash){
        return false;
    } else if ( getHashforBlock(candidateBlock) !== candidateBlock.hash){
        return false;
    } else {
        return true;
    }
};

const addBlcok= (candidateBlock: Block): void => {
    if(isBalckValid(candidateBlock, getLatesBlock())){
        blockchain.push(candidateBlock);
    }
}

export{};