(function () {
    'use strict';
    angular.module('Lunch', [])
    .controller('LunchController', LunchController);

    LunchController.$inject = ['$scope'];
    function LunchController ($scope) {
        $scope.name = "";
        $scope.output = "";

        $scope.check = function () {
            console.log('button');
            var mealAmount = calculateMealAmount($scope.name);
            var msg ="Engoy!";

            console.log(mealAmount);
            if (mealAmount == 0)
                msg = "Please enter data first";
            else if (mealAmount >3)
                msg = "Too much";

            $scope.output = msg;  
        };
    }

    function calculateMealAmount (string) {
        if (string === '') return 0;
        var amount = 0;
        var meals = string.split(',');

//code to handle a case where there is no item between some commas
        amount = meals.length;
        for (var i = 0; i < meals.length; i++)
            if (meals[i].trim() === '') amount--;

        return amount;
    }

})();