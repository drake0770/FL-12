let pasword;
let paswordold;
let paswordnew;
let paswordnew2;
const minemaillenght = 5;
const minpaswoedlenght = 6;
let usedemailid1 = 'user@gmail.com';
let usedemailid2 = 'admin@gmail.com';
let usedpassid1 = 'UserPass';
let usedpassid2 = 'AdminPass';
let email = prompt('Enter email please');
if (email === '' || email === null) {
    alert('Canceled.');
} else if (email.length < minemaillenght) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (email.toLowerCase() === usedemailid1 || email.toLowerCase() === usedemailid2) {
    pasword = prompt('Enter a password please');
    if (pasword === '' || pasword === null) {
        alert('Canceled.');
    } else
        if (email.toLowerCase() === usedemailid1 && pasword === usedpassid1
            || email.toLowerCase() === usedemailid2 && pasword === usedpassid2) {
            let conf = confirm('Do you want to change your password?');
            if (conf === true) {
                paswordold = prompt('Enter the old password please');
                if (paswordold === '' || paswordold === null) {
                    alert('Canceled.');
                } else
                    if (email.toLowerCase() === usedemailid1 && paswordold === usedpassid1
                        || email.toLowerCase() === usedemailid2 && paswordold === usedpassid2) {
                        paswordnew = prompt('Enter a new password please');
                        if (paswordnew === '' || paswordnew === null) {
                            alert('Canceled.');
                        } else
                            if (paswordnew.length < minpaswoedlenght) {
                                alert('It/’s too short password. Sorry.');
                            } else
                                if (paswordnew.length >= minpaswoedlenght) {
                                    alert('Repeat a new password please');
                                    paswordnew2 = prompt('Enter a new password please');
                                    if (paswordnew2 !== paswordnew) {
                                        alert('You wrote the wrong password.');
                                    } else {
                                        alert('You have successfully changed your password.');
                                        pasword = paswordnew2;
                                    }
                                }
                    } else {
                        alert('You have failed the change.');
                    }
            }
        }
} else {
    alert('I don’t know you');
}
