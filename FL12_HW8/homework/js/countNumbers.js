function countNumbers(str) {
    let array = str.split('');
    let array2 = new Array();
    var result = {};
    let str2 = '';
    for (let i = 0; i < array.length; i++) {
        let c = parseInt(array[i]);
        if (!isNaN(c)) {
            array2.push(c);
        }
    }
    for (let i = 0; i < array2.length; ++i) {
        let a = array2[i];
        if (result[a] !== undefined) {
            ++result[a];
        } else {
            result[a] = 1;
        }
    }
    for (let key in result) {
        str2 += ('"' + key + '"' + ' : ' + result[key] + ', ');
    }
    return str2;
}
countNumbers('2q5a4fff444');
