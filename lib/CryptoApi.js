import axios from 'axios';
import colors from 'colors';
import https from 'https';

export class CryptoApi {
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl = 'https://rest.coinapi.io/v1/exchanges'
    }

    async getPriceData(coin, curr){
        
        try {
            const formatter = new Intl.NumberFormat('en-US',{
                style:'currency',
                currency:curr
            })
            const res = await axios.get(`https://rest.coinapi.io/v1/exchangerate/${coin}/${curr}?apiKey=${this.apiKey}`);
            // console.log(res.data);
                let output = `\t${colors.rainbow('Coin')}: ${res.data.asset_id_base.green}\n\t${colors.rainbow('Price')}: ${formatter.format(res.data.rate).toString() .blue} ${curr .yellow}`
            
            return output;
        } catch (err) {
            console.log(err.message .red);
        }
        
    }
}