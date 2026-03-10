
import chalk from 'chalk';
import qrcodeTerminal from 'qrcode-terminal';
import qrcode from 'qrcode';


export default async function handleQRCode(err, option) {
    if (err) {
        console.error('Erro ao obter os dados:', err);
        return;
    }

    if(option.type == '1') {
        qrcodeTerminal.generate(option.link, { small: true }, (qrcode) => {
            console.log(chalk.green.bold('QR Code gerado com sucesso:\n'));
            console.log(qrcode)
        });
    }else if (option.type == '2') {
        qrcode.toFile('qrcode.png', option.link, function (err) {
            if (err) throw err;
            console.log('QR Code salvo como qrcode.png');
        });
    }

}
