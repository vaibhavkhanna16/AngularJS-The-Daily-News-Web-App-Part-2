(function(){

  'use strict';

  angular.module('MyNewsApp',[])
  .controller('NewsController',NewsController)
  .service('NewsService',NewsService);

  NewsController.$inject=['NewsService'];

  function NewsController(NewsService){
    var news=this;

    var promise = NewsService.getData();
    promise.then(function(response){
      news.newsData = response.data.articles;
    });
  }

  NewsService.$inject = ['$http'];
  function NewsService($http){
    var service=this;

    service.getData = function(){

      var response = $http({

        method:'GET',
        url: "https://newsapi.org/v1/articles?source=fortune&sortBy=latest&apiKey=d482a9751e764532b25ff420b503e2e7"

      });

      return response;
    };
  }
})();
