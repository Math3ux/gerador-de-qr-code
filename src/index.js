
import SchemaMainPrompt from './prompts-schema/schema-main.js';
import prompt from 'prompt';
import createQRCode from './services/qr-code/create.js';
import createPassword from './services/password/create.js';

async function main(){
    prompt.get(SchemaMainPrompt, async (err, choose) => {
        
        if (err) {
            console.error('Error:', err);
            return;
        }

        if (choose.select === '1') {
            await createQRCode();
        } else if (choose.select === '2') {
            await createPassword();
        }
    });
}

main();
