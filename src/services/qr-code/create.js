import prompt from 'prompt';
import SchemaQRCodePrompt from '../../prompts-schema/schema-qrcode.js';
import handleQRCode from './handle.js';


async function createQRCode(){
    prompt.get(SchemaQRCodePrompt, handleQRCode);
    prompt.start();
}

export default createQRCode;
