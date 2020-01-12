function convert() {
    let array = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            array.push(Number(arguments[i]));
        } else {
            array.push(String(arguments[i]));
        }
    }
    return array;
}

function executeforEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}

function mapArray(array, fn) {
    let array2 = [];
    executeforEach(array, function (el) {
        array2.push(fn(Number(el)));
    });
    return array2;
}

function filterArray(array, fn) {
    let array2 = [];
    executeforEach(array, function (el) {
        if (fn(Number(el))) {
            array2.push(el);
        }
    });
    return array2;
}

function flipOver(str) {
    let strres = '';
    for (let i = str.length - 1; i >= 0; i--) {
        strres += str[i];
    }
    return strres;
}

function makeListFromRange(array) {
    let array2 = [];
    for (let i = array[0]; i <= array[1]; i++) {
        array2.push(i);
    }
    return array2;
}

function getPastDay(date, time) {
    const dayMilliseconds = 86400000;
    let newdate = new Date();
    newdate.setTime(date.getTime() - dayMilliseconds * time);
    return newdate.getDate();
}

function formatDate(date) {
    let ten = 10;
    date.setMonth(date.getMonth() + 1);
    let hours = date.getHours() < ten ? '0' + date.getHours() : date.getHours();
    let newdate = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate() + ' '
        + hours + ':' + date.getMinutes();
    return newdate;
}

function getArrayOfKeys(actors, param) {
    let arr2 = [];
    executeforEach(actors, function (el) {
        arr2.push(el[param]);
    });
    return arr2;
}

function substitute(arr) {
    let thirty = 30;
    return mapArray(arr, function (el) {
        if (el < thirty) {
            el = '*';
        }
        return el;
    });
}

