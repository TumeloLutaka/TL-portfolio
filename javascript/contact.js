(function(){
    emailjs.init("rP8oN8DstyEJ2Zzfz");
})();

function sendEmail(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('msg').value

    if(validate(name, email, message)){
        var templateParams = {
            name,
            email,
            message
        };
        
        emailjs.send('tumeloEmail', 'tumeloPortfolio', templateParams)
            .then(function(response) {
                alert('SUCCESS! Your message has been sent!');
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                alert('FAILED... There was an error in trying to send your message. Please try again later...');
                console.log('FAILED...', error);
            });
    }
}

function validate(name, email, message){
    // NAME VALIDATION
    if(name.trim() === '')
    return false;

    // EMAIL VALIDATION
    if(email.trim() === '')
    return false;

    let regxEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // var pattern = regxEmail.test(email.toLowerCase());
    // alert(pattern + ": " + email);
    if(!regxEmail.test(email.toLowerCase())){
        alert("Enter valid email...");
        return false; 
    }  

    // MESSAGE VALIDATION
    if(message.trim() === '')
    return false;


    return true
}