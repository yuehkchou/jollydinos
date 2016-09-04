angular.module('gitHired.services',[])
// called the angular module

//instantiate
.factory('Jobs', function($http) {
	var getAll = function () {
  // Returnaing a Promise returned by $http
  // sending a Get request that will be routed in the router file
  	return $http({
  		method: 'GET',
  		url: '/api/listing'
    });
	};

  var postOne = function(job) {
    // job.fav = false;
    return $http({
      method: 'POST',
      url: '/api/listing',
      data: job
    });
  };

  var delOne = function(job) {
    return $http({
      method: 'DELETE',
      url: '/api/listing',
      data: job,
      headers: {'Content-Type': 'application/json'}
    })
  };

  var editOne = function(job) {
    //PLACEHOLDER
    // job.company = prompt('Please enter a new company name.', job.company);
    createdAt = new Date();
    job.createdAt = createdAt;
    var id = job._id;
    return $http({
      method: 'PUT',
      url: '/api/listing',
      data: job,
      headers: {'Content-Type': 'application/json'}
    })
  };

  //How do we just merge this with above, as one PUT function?
  var toggleOne = function(job) {
    job.fav = !job.fav;
    return $http({
      method: 'PUT',
      url: '/api/listing',
      data: job,
      headers: {'Content-Type': 'application/json'}
    })
  }

	return {
		getAll: getAll,
    postOne: postOne,
    delOne: delOne,
    editOne: editOne,
    toggleOne: toggleOne
	};
})
.factory('Auth', function ($http, $location, $window) {

var login = function (user) {
    return $http({
      method: 'GET',
      url: '/login',
      data: user
    })
    .then(function (resp) {
      $location.path('/listing')
    })
    .catch(function (err){
      $location.path('/login')
    });
  };
  return {
    login: login
  }
});
