var emailValidator = function(email) {
    var regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var result = regEx.test(email);
    console.log(result);
    return result;
}

// testing code
var email = 'anna@igt.com';
var isValid = emailValidator(email);
if(isValid) {
    console.log(email + " is valid!");
} else {
    console.log(email + " is not valid!");
}
