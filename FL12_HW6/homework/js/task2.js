let a = parseInt(+prompt('Insert a'));
let b = parseInt(+prompt('Insert b'));
let c = parseInt(+prompt('Insert c'));

if (isNaN(a) || a === '' || isNaN(b) || b === '' || isNaN(c) || c === '') {
    alert('input values should be ONLY numbers');
} else if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length');
}

if (c < a + b && b < a + c && a < b + c) {
    if (a === b && a === c) {
        alert('Equilateral triangle');
    } else if (a === b || b === c || c === a) {
        alert('Isosceles triangle');

    } else {
        alert('Scalene triangle');
    }
} else {
    alert('Triangle doesn’t exist');
}