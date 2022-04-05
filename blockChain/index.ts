class Block{
    public index: number;
    public hash: string;
    public previsouHash: string;
    public data: string;
    public timestamp: number;
    
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

export{};