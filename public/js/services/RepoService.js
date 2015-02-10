angular.module('RepoService', []).factory('Repo', ['$http', function($http) {

    return {
        // call to get all repos
        get : function() {
            return $http.get('/api/repos/');
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new repo

        create : function(repoData) {
            return $http.post('/api/repos/', repoData);
        },

        // call to DELETE a repo
        delete : function(id) {
            return $http.delete('/api/repos/' + id);
        }
    }

}]);
