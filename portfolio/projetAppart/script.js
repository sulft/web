$(function () {
    var API_ENDPOINT = 'https://ib5yxxco7j.execute-api.ca-central-1.amazonaws.com/dev'
    
    /*window.verifyRecaptchaCallback = function (response) {
        $('input[data-recaptcha]').val(response).trigger('change');
    }*/

    /*window.expiredRecaptchaCallback = function () {
        $('input[data-recaptcha]').val("").trigger('change');
    }*/

    //$('#form-wrap').validator();

    $('#form-wrap').on('submit', function (e) {
        
        if (!e.isDefaultPrevented()) {
            var inputData = {
                "name": document.getElementById('lastName').value,
                "email": document.getElementById('email').value,
                "text": "Bonjour je m'appelle " +  document.getElementById('lastName').value + " je souhaite réserver pour votre BNB entre " + document.getElementById('entrée').value + " et le " + document.getElementById('sortie').value + ". Nous serons "+ document.getElementById('nbInvite').value + " personnes." +" Pouvez-vous me recontacter au " + document.getElementById('number').value,
                "context":"vacances-test"
            };

            /*var language = document.getElementsByClassName("language");
            if (language[0].textContent == "Francais") {
                messageSuccess = "Information bien envoyée !\nJe vous répondrai bientôt";
                messageFailed = "Une erreur est survenu. Essayez plus tard.";
            }else if(language[0].textContent == "English"){
                messageSuccess ="Informations sent.\nI will answer shortly";
                messageFailed = "An error occured. Please try again later";
            }*/

            var language = "Francais";
            if (language == "Francais") {
                messageSuccess = "Information bien envoyée !\nJe vous répondrai bientôt";
                messageFailed = "Une erreur est survenu. Essayez plus tard.";
            }

            $.ajax({
                url: API_ENDPOINT,
                type: 'POST',
                data: JSON.stringify(inputData),
                success: function(response) {
                    document.getElementsByClassName('messages').outerHTML = messageSuccess;
                    $('#form-wrap')[0].reset();
                    //grecaptcha.reset();
                    return false;
                },
                error: function() {
                    document.getElementsByClassName('messages').outerHTML = messageFailed;
                    return false;
                },
              });
            }
            document.getElementById("button").disabled = 'true';
        return false;
    })
});