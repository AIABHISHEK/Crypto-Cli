import { CryptoApi } from "../lib/CryptoApi.js";
import { KeyManager } from "../lib/KeyManager.js";

export const check = {
    async price(cmd){
        try {
            
            let keyManager = new KeyManager();
            const key = keyManager.getKey();
            const price = new CryptoApi(key);
            const data = await price.getPriceData(cmd.coin, cmd.curr);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
}