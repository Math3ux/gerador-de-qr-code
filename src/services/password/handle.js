
async function handle(){
    let characteres = []
    let password = ''

    const passwordLength = process.env.PASSWORD_LENGTH;

    if (process.env.UPPERCASE_LETTERS === 'true') {
        characteres.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
    if (process.env.LOWERCASE_LETTERS === 'true') {
        characteres.push(...'abcdefghijklmnopqrstuvwxyz');
    }
    if (process.env.NUMBERS === 'true') {
        characteres.push(...'0123456789');
    }
    if (process.env.SPECIAL_CHARACTERS === 'true') {
        characteres.push(...'!@#$%^&*()-+');
    }

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characteres.length);
        password += characteres[randomIndex];
    }

    return password;
}

export default handle;