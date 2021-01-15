app.controller('ctrl', function($scope) {
    $scope.nom = 'vilver';
    $scope.prenom = 'terry';
    $scope.names = [
        {name : 'John',     age : 12},
        {name : 'Antoni',   age : 16}, 
        {name : 'Hans',     age : 20}
    ];
    $scope.complet = function() {
        $scope.nom = 'DESPAGNE';
        $scope.prenom = 'Hans';
    };
});