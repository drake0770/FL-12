function isLeapYear(date) {
    let date1 = new Date(date);
    let text;
    if (!isNaN(date1)) {
        let year = date1.getFullYear();
        if (year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)) {
            text = year + ' is not a leap year';
        } else {
            text = year + ' is a leap year';
        }
    } else {
        text = 'Invalid Date';
    }
    return text;
}
isLeapYear('2020-01-01 00:00:00');