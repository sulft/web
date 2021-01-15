app.controller('ctrl', function($scope) {
    $scope.nom = 'vilver';
    $scope.prenom = 'terry';
    $scope.complet = function() {
        return $scope.prenom + " " + $scope.nom;
    };
});