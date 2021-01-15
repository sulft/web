app.directive("w3",function() {
    return {
        template : "<h1>Votre nom complet est : {{nom + ' ' + prenom}}</h1>\n"
    };
});