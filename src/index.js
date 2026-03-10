
import mainPrompt from './prompts/prompt-main.js';
import prompt from 'prompt';
import createQRCode from './services/qr-code/create.js';

async function main(){
    prompt.get(mainPrompt, async (err, choose) => {

        if (choose.select === '1') {
            //const createQRCode = await import('./services/qr-code/create.js');
            createQRCode();
        } else if (choose.select === '2') {
            const { default: password } = await import('./tools/password.js');
            password();
        }
    });
}

main();
