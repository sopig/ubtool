App.controller('rankCtl', ['$scope', '$location', '$routeParams', 'anchorScroll', '$http', function($scope, $location, $routeParams, anchorScroll, $http) {
    var languageType = $routeParams.target;
    $scope.curpage = 1;
    $('#bar-search').show(0);
    clearBDShare();
    $("#look-for-more").click(function() {
        $scope.curpage++;
        getUserList(languageType,$scope.curpage,20);
    });
    
   
    var full_rank_data = [];
    var getUserList = function (type,page,per_page) {
        var url = 'https://api.github.com/search/users?client_id=048104ae14aed157ebec&client_secret=d7c6d7e04c05a81feeeda90375137fcefb3df7db'+'&q=language:'+type +'%20location:china'+'&page='+page+'&per_page='+per_page;
        $.ajax({
            url: url,
            dataType: "json",
            method: "GET",
            success: function(data) {
                full_rank_data = full_rank_data.concat(data.items)
                $scope.full_rank_data = full_rank_data;
                $scope.$apply();
                console.log('++++++++++');
            },
            error: function(data) {
               console.log('error');
            }
        }, true);
    };

    if(!languageType) {
        languageType = 'javascript';
    }
    getUserList(languageType,$scope.curpage,20);
    
}]);
