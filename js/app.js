var app = angular.module("SortingApp", []);

app.controller("FoodController", ["$scope", function($scope){
	console.log("testing...1...2...3");

	$scope.foodList = shuffle(fruit.concat(vegetables));
	$scope.fruitList = [];
	$scope.veggieList = [];
	$scope.sorted = false;
	$scope.alphabet = false;
	$scope.ordered = false;

	function shuffle(array){
		var m = array.length, t, i;
	  	while (m) {
	    	i = Math.floor(Math.random() * m--);
	    	t = array[m];
	    	array[m] = array[i];
	    	array[i] = t;
	  	}
	  	return array;
	}

	$scope.moveLeft = function(index){
		$scope.fruitList.push($scope.foodList[index]);
		$scope.foodList.splice(index,1);
		checkSorted();
	}

	$scope.moveRight = function(index){
		$scope.veggieList.push($scope.foodList[index]);
		$scope.foodList.splice(index,1);
		checkSorted();
	}

	$scope.moveCenterFromFruits = function(index){
		$scope.foodList.push($scope.fruitList[index]);
		$scope.fruitList.splice(index,1);
	}
	$scope.moveCenterFromVeggies = function(index){
		$scope.foodList.push($scope.veggieList[index]);
		$scope.veggieList.splice(index,1);
	}


	$scope.incorrect = function(index){
		if($scope.foodList.length===0){
			if(fruit.indexOf($scope.fruitList[index]) === -1){
				return true;
			}else{
				return false;
			}
		}else{
			return false;
		}
	}

	$scope.incorrectR = function(index){
		if($scope.foodList.length===0){
			if(vegetables.indexOf($scope.veggieList[index]) === -1){
				return true;
			}else{
				return false;
			}
		}else{
			return false;
		}
	}

	function checkSorted(){
		var f = 0;
		for(var i=0; i<fruit.length; i++){
			if(fruit.indexOf($scope.fruitList[i])>-1){
				f++;
			}
		}
		var v = 0;
		for(var i=0; i<vegetables.length; i++){
			if(vegetables.indexOf($scope.veggieList[i])>-1){
				v++;
			}
		}
		if(v===vegetables.length && f===fruit.length){
			$scope.sorted = true;
			$scope.alphabet = true;
		}else{
			$scope.sorted = false;
		}
	}

	$scope.moveUpL = function(index){
		if(index===0){

		}else{
			var container = $scope.fruitList[index-1];
			$scope.fruitList[index-1] = $scope.fruitList[index];
			$scope.fruitList[index] = container;
			checkAlphabetized();
		}
	}

	$scope.moveDownL = function(index){
		if(index===$scope.fruitList.length -1){

		}else{
			var container = $scope.fruitList[index+1];
			$scope.fruitList[index+1] = $scope.fruitList[index];
			$scope.fruitList[index] = container;
			checkAlphabetized();
		}
	}
	$scope.moveUpR = function(index){
		if(index===0){

		}else{
			var container = $scope.veggieList[index-1];
			$scope.veggieList[index-1] = $scope.veggieList[index];
			$scope.veggieList[index] = container;
			checkAlphabetized();
		}
	}
	$scope.moveDownR = function(index){
		if(index===$scope.veggieList.length -1){

		}else{
			var container = $scope.veggieList[index+1];
			$scope.veggieList[index+1] = $scope.veggieList[index];
			$scope.veggieList[index] = container;
			checkAlphabetized();
		}
	}


	function checkAlphabetized(){
		var sortedFruit = fruit.sort();
		var f = 0;
		var sortedVeggies = vegetables.sort();
		var v = 0;
		for(var i=0; i<fruit.length; i++){
			if($scope.fruitList[i]===sortedFruit[i]){
				console.log($scope.fruitList[i]+" in the right place")
				f++;
			}
		}
		for(var i=0; i<vegetables.length; i++){
			if($scope.veggieList[i]===sortedVeggies[i]){
				console.log($scope.veggieList[i]+" in the right place")
				v++;
			}
		}
		if(f===fruit.length && v===vegetables.length){
			$scope.ordered = true;
		}
	}
}]);

console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);