
import { KeyManager } from '../lib/KeyManager.js';
import colors from 'colors';
import inquirer from 'inquirer';
import { isRequired } from '../utils/validation.js';

export const key = {
    set() {
        const keyManager = new KeyManager();
        inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter api key '.green + '\nhttps://www.coinapi.io/',
                validate:isRequired
            }
        ])
            .then((data) =>{
                const key = keyManager.setKey(data.key)
                // console.log(data);
                if(key){
                    console.log('API key set '.blue + key .green);
                }
            })
            .catch((err)=>{
                console.log(err.message .red);
            })
    },

    show() {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();
            console.log('Current api key '.bgBlue, key .yellow);
        } catch (error) {
            console.log(error.message .bgRed);
        }
    },

    remove() {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.deleteKey();
            console.log('Key removed' .bgCyan);
        } catch (error) {
            console.log(error.message .bgRed);
        }
        
    }
}

