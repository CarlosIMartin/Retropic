const helpers = {};

helpers.randomNumber = () => {
    const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomName = "";
    for (let i = 0; i < 9; i++) {
        randomName += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return randomName;
}

module.exports = helpers;