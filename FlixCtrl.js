app.controller('FlixCtrl', function ($scope, flixService ) {
	// body...
	$scope.allMovies = flixService.allMovies;

	$scope.president_elect = flixService.president_elect;

	$scope.budget = 50;
/***********************************************************************************************************/
	$scope.addMovie=function(index){


		if( $scope.budget - $scope.allMovies[index].price < 0 ){
          alert('hillary will delete your emails');
		}else{
			var clickedMovie = $scope.allMovies[index]
			$scope.president_elect.push(clickedMovie);

			$scope.budget -= $scope.allMovies[index].price;
		};

		$scope.remove= function(donald_j_trump){

			$scope.president_elect.splice(donald_j_trump, 1)
		};
	

	};
	console.log($scope.allMovies);
});