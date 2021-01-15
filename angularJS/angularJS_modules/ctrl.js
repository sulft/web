//notion de $rootScope utilisable partout
app.run(function($rootScope) {
    $rootScope.test = 'test';
  });

//notion de $scope utilisable de façon locale
app.controller('ctrl', function($scope) {
    $scope.nom = 'vilver';
    $scope.prenom = 'terry';
    $scope.names = [
        {name : 'John',     age : 24},
        {name : 'Antoni',   age : 12}, 
        {name : 'Hans',     age : 20}
    ];
    $scope.complet = function() {
        $scope.nom = 'DESPAGNE';
        $scope.prenom = 'Hans';
    };
});