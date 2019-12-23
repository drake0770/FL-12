let a = prompt('Insert a');
if (isNaN(a) || a === 0) {
    alert('Invalid input data');
}
let b = prompt('Insert b');
if (isNaN(b)) {
    alert('Invalid input data');
}
let c = prompt('Insert c');
if (isNaN(c)) {
    alert('Invalid input data');
}

let dis = 4;
let d = b * b - dis * a * c;
if (d > 0) {
    let mn = 2;
    let x1 = (-b + Math.sqrt(d)) / (mn * a);
    let x2 = (-b - Math.sqrt(d)) / (mn * a);
    alert('x1=' + x1 + ' and x2=' + x2);
} else if (d === 0) {
    let mn = 2;
    let x = -b / (mn * a);
    alert('x= ' + x);
} else {
    alert('no solution');
}