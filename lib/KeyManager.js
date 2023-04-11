
import Configstore from 'configstore';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pkg = require("../package.json");
// import pkg from '../package.json';



export class KeyManager{
    constructor(){
        this.config = new Configstore(pkg.name);
    }

    setKey(key) {
        this.config.set('apiKey', key);
        return key;
    }

    getKey() {
        const Key = this.config.get('apiKey');

        if(!Key){
            throw new Error('No api key found Get at https://www.coinapi.io/');
        }
        return Key;
    }
    
    deleteKey() {
        const key = this.config.get('apiKey');
        
        if(!key){
            throw new Error('No api key found to delete');
        }
        this.config.delete('apiKey');
        return;
    }
    
}
// module.exports = KeyManager;