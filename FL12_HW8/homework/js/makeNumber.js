function makeNumber(str) {
    let array = str.split('');
    let str2 = '';
    for (let i = 0; i < array.length; i++) {
        let c = parseInt(array[i]);
        if (!isNaN(c)) {
            str2 += c;
        }
    }
    return str2;
}
makeNumber('2q5a4fff444');

