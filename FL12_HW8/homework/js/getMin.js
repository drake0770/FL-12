function getMin(a, b, c) {
    let min;
    let array = new Array();
    array[0] = a;
    array[1] = b;
    array[2] = c;
    min = a;
    for (let i = 0; i <= 2; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }

    return min;
}

getMin(1, 2, 5);
