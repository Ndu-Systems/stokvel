app.controller('admin_announcementsController', function ($http, $scope, $window) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }
    $scope.name = localStorage.getItem("name");
    var user = localStorage.getItem("email");
   
    //var data = {
    //    username: user
    //}
    //$http.post(GetApiUrl("myNotifications"), data).success(function (data, status) {
    //    $scope.announcements = data.announcments;
    //    $scope.myNotifications = 0;
    //    //get coiunts 
    //    var notifications = 0;
    //    angular.forEach($scope.announcements, function (item) {        
    //        notifications++;
    //    });
    //    $scope.myNotifications = notifications;
    //})
    $http.post(GetApiUrl("notifications")).success(function (data, status) {
        $scope.announcements = data.announcments;
        $scope.myNotifications = 0;
        var notifications = 0;
        angular.forEach($scope.announcements, function (item) {
            if (item.addressTo === user) {
                notifications++;
            }
        });
        $scope.myNotifications = notifications;
    })
});

app.controller('new_announcementsController', function ($http, $scope, $window) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }
    $scope.name = localStorage.getItem("name");
    $scope.message = undefined;

    $scope.postAnnouncement = function () {
        var topic = $scope.topic;
        var addressTo = $scope.addressTo;
        var commments = $scope.commments;

        var data = {
            topic: $scope.topic,
            addressTo: addressTo,
            commments: commments
        };
        
        if (data.addressTo === undefined && data.commments !== undefined && data.topic !== undefined) {

            data.addressTo = 'All';            
            $http.post(GetApiUrl("addNotiffication"), data)
               .success(function (response, status) {
                   if (response === "1") {
                       $scope.message = "Posted Succesfully";
                       $window.location.href = "#announcements";

                   } else {
                       $scope.message = response;
                   }
               });
        }
        else {
            $http.post(GetApiUrl("addNotiffication"), data)
             .success(function (response, status) {
                 if (response === "1") {
                     $scope.message = "Posted Succesfully";
                     $window.location.href = "#announcements";

                 } else {
                     $scope.message = response;
                 }
             });
        }

    };
});

app.controller('my_announcementsController', function ($http, $scope, $window) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }
    $scope.name = localStorage.getItem("name");
    var user = localStorage.getItem("email");
    var data = {
        username: user
    }
    $http.post(GetApiUrl("myNotifications"), data).success(function (data, status) {
        $scope.announcements = data.announcments;       
    })
});