function addOne(x) {
    return x + 1;
}
function pipe(count, ...arg) {
    for (let i = 0; i < arg.length; i++) {
        count = arg[i](count);
    }
    return count;
}
pipe(1, addOne);