import chalk from 'chalk';
import handle from './handle.js';

export default async function createPassword() {
    console.log(chalk.green("Gerando senha...\n"));
    const password = await handle();
    console.log(chalk.green.bold('Senha gerada com sucesso:'));
    console.log(chalk.blue.bold(password));
}
