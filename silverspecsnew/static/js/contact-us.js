document.getElementById('contactForm').addEventListener('submit', sendDataToLambda);

// Now for the good stuff. This is the function that will send our data to AWS.
function sendDataToLambda(e) {
    e.preventDefault();
    // Gets the values of each field in our form. This is the data we'll send to our Lambda function.
    var formEmail = document.querySelector('.form-email').value;
    var formSubject = document.querySelector('.form-subject').value;
    var formName = document.querySelector('.form-name').value;
    var formMessage = document.querySelector('.form-message').value;

    if (formEmail.length > 1 && formEmail.indexOf("@") > -1 && formSubject.length > 0) {

        // This is the endpoint we created in our API Gateway. This is where we make our POST request, which calls our Lambda function.
        var endpoint = 'https://e225yj5vaf.execute-api.us-west-2.amazonaws.com/prod/ContactFormLambda';
        // Remember those form values we just grabbed? We're going to put them into an object here.
        var body = {
            email: formEmail,
            subject: formName + ": " + formSubject,
            message: "Sent from: " + formEmail + " - " + formMessage
        }
        // Here, we instantiate our Request. This is a special object used by the Fetch API so it knows where to send data, what data to send, and how to send it.
        var lambdaRequest = new Request(endpoint, {
            method: 'POST',
            // Quick note: 'no-cors' mode is for development on localhost only!
            mode: 'no-cors',
            body: JSON.stringify(body)
        });

        fetch(lambdaRequest)
        // This is where you can handle errors. This is just an example, so we won't cover that.
            .then(response => console.log(response))
            .catch(err => console.log(err));

        alert("Email sent!");
        $("#sendBtn").attr("disabled", true);
    }
}