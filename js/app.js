var app = angular.module('app', []);

app.controller('relicCtrl', function($scope, $http) {
  $scope.scroll = 10;
  $scope.memory = 72;
  $scope.seal = 110;
  $scope.metalArmor = 50;
  $scope.redOrcFang = 60;
  $scope.redOrcNose = 70;
  $scope.hugeSpear = 80;
  $scope.silver = 1100000;
  $scope.relic = 750000;
  $scope.armor = 160000;
  $scope.weapon = 170000;
  $scope.vp = true;

  $scope.memoryIncome = function() {
    return $scope.memory * 750000 * ($scope.vp ? 0.845 : 0.65);
  };

  $scope.armorOrWeapon = function() {
    if($scope.armor * 3 > $scope.weapon * 2)
      return "Armor";
    return "Weapon";
  };

  $scope.sealIncome = function() {
    if($scope.armorOrWeapon() === "Armor")
      price =  $scope.seal / 2 * $scope.armor;
    else
      price =  $scope.seal / 3 * $scope.weapon;

    return price * ($scope.vp ? 0.845 : 0.65);
  };
  
  $scope.fangIncome = function() {
    return $scope.redOrcFang * 375;
  };

  $scope.noseIncome = function() {
    return $scope.redOrcNose * 450;
  };

  $scope.metalIncome = function() {
    return $scope.metalArmor * 1000;
  };

  $scope.spearIncome = function() {
    return $scope.hugeSpear / 150 * 125000;
  };

  $scope.totalCost = function() {
    return $scope.relic * 5 * $scope.scroll;
  };

  $scope.totalIncome = function() {
    return $scope.memoryIncome() +
           $scope.sealIncome() + 
           $scope.fangIncome() +
           $scope.noseIncome() +
           $scope.metalIncome() +
           $scope.spearIncome() +
           $scope.silver;
  };


});
