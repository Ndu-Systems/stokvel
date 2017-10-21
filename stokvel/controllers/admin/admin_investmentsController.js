app.controller('admin_investmentsController', function ($http, $scope, $window) {

    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }
    $scope.name = localStorage.getItem("name");


    $scope.newInvestments = 0;   
    $scope.activeInvestments = 0;
    $scope.closedInvestments = 0;
    //$scope.readyInvestments = 0;
    $scope.confirmInvestments = 0;

    $http.post(GetApiUrl("getInvestments2")).success(function (data, status) {
        $scope.investments = data.investments;

        //Counts
        var countInvestments = 0;
        //var countWithdrawals = 0;
        var countActive = 0;
        var countClosed = 0;
        var countConfirms = 0;
        angular.forEach($scope.investments, function (item) {

            if (item.status === "New") {
                countInvestments++;
            }
            if (item.status === "Pending") {
                countConfirms++;
            }
            if (item.status === "Closed") {
                countClosed++;
            }
            if (item.status === "Active") {
                countActive++;
            }
        });
        $scope.newInvestments = countInvestments;
        $scope.confirmInvestments = countConfirms;
        $scope.activeInvestments = countActive;
        $scope.closedInvestments = countClosed;
    })

    $scope.approve = function (item) {
        localStorage.setItem("id", item.id);
        localStorage.setItem("amount", item.amount);
        localStorage.setItem("date", item.date);
        localStorage.setItem("expectedDate", item.expectedDate);
        localStorage.setItem("email", item.email);
        localStorage.setItem("status", item.status);
        $window.location.href = "#approve"
    }
    $scope.decline = function (item) {
        localStorage.setItem("id", item.id);
        localStorage.setItem("amount", item.amount);
        localStorage.setItem("date", item.date);
        localStorage.setItem("expectedDate", item.expectedDate);
        localStorage.setItem("email", item.email);
        localStorage.setItem("status", item.status);
        $window.location.href = "#decline"
    }
    $scope.view = function (item) {
        localStorage.setItem("id", item.id);
        localStorage.setItem("amount", item.amount);
        localStorage.setItem("date", item.date);
        localStorage.setItem("expectedDate", item.expectedDate);
        localStorage.setItem("email", item.email);
        localStorage.setItem("status", item.status);
        localStorage.setItem("doc", item.doc);
        $window.location.href = "#confirm"
    }

    $scope.closeInvestment = function (item) {

        localStorage.setItem("withdrawId", item.id);
        $window.location.href = "#closeWithdrawal";
    }
});

app.controller('approve_investmentController', function ($http, $scope, $window) {

    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }
    $scope.name = localStorage.getItem("name");

    $scope.id = localStorage.getItem("id");
    $scope.amount = localStorage.getItem("amount");
    $scope.date = localStorage.getItem("date");
    $scope.expectedDate = localStorage.getItem("expectedDate");
    $scope.email = localStorage.getItem("email");
    $scope.status = localStorage.getItem("status");

    $scope.approveInvestment = function () {

        var data = {
            id: $scope.id,
            amount: $scope.amount,
            date: $scope.date,
            expectedDate: $scope.expectedDate,
            email: $scope.email,
            reason : 'Welcome To Financial Freedom',
            status: 'Approved'
        };
        $http.post(GetApiUrl("updateInvestment"), data).success(function (data, status) {
            if (parseFloat(data) === 1) {
                $window.location.href = "#investments_approved";
                $scope.error = undefined;
            }
            else {
                $scope.error = "Something Went Wrong, Please Try Again";
            }
        })
    };
}); 
app.controller('decline_investmentController', function ($http, $scope, $window) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }
    $scope.name = localStorage.getItem("name");

    $scope.id = localStorage.getItem("id");
    $scope.amount = localStorage.getItem("amount");
    $scope.date = localStorage.getItem("date");
    $scope.expectedDate = localStorage.getItem("expectedDate");
    $scope.email = localStorage.getItem("email");
    $scope.status = localStorage.getItem("status"); 

    $scope.declineInvestment = function () {
        var _reason = $scope.reason;
        var data = {
            id: $scope.id,
            amount: $scope.amount,
            date: $scope.date,
            expectedDate: $scope.expectedDate,
            email: $scope.email,
            reason: _reason,
            status: 'Declined'
        };
        if (_reason != undefined) {
            $http.post(GetApiUrl("updateInvestment"), data).success(function (data, status) {
                if (parseFloat(data) === 1) {
                    $window.location.href = "#dashboard";
                    $scope.error = undefined;
                }
                else {
                    $scope.error = "Something Went Wrong, Please Try Again";
                }
            })
        }
        else {
            $scope.error = "Please Provide A reason for decline";
        }
    };
});
app.controller('confirm_investmentController', function ($http, $scope, $window) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }
    $scope.name = localStorage.getItem("name");

    $scope.id = localStorage.getItem("id");
    $scope.amount = localStorage.getItem("amount");
    $scope.date = localStorage.getItem("date");
    $scope.expectedDate = localStorage.getItem("expectedDate");
    $scope.email = localStorage.getItem("email");
    $scope.status = localStorage.getItem("status");
    $scope.doc = localStorage.getItem("doc");

    $scope.confirmInvestment = function () {
        var _reason = $scope.reason;
        var data = {
            id: $scope.id,
            amount: $scope.amount,
            date: $scope.date,
            expectedDate: $scope.expectedDate,
            email: $scope.email,
            reason: 'Proof Of Payment Valid',
            status: 'Active'
        };
              $http.post(GetApiUrl("updateInvestment"), data).success(function (data, status) {
                if (parseFloat(data) === 1) {
                    $window.location.href = "#investments_confirm";
                    $scope.error = undefined;
                }
                else {
                    $scope.error = "Something Went Wrong, Please Try Again";
                }
            })
    
    };
});
app.controller('close_investmentController', function ($http, $scope, $window) {

    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }
    $scope.name = localStorage.getItem("name");
    $scope.id = localStorage.getItem("withdrawId");
    $scope.filesChanged = function (eml) {
        $scope.files = eml.files;
        $scope.filename = $scope.files[0].name;
        // alert($scope.filename);
        $scope.$apply();
    };
    $scope.SaveFile = function () {
        if ($scope.filename !== undefined) {
            var doc = "";
            var formData = new FormData();
            angular.forEach($scope.files, function (file) {
                formData.append('file', file);
                formData.append('name', file.name)
            });

            $http.post(GetApiUrl("upload"), formData, {
                transformRequest: angular.identity,
                headers: { 'Content-Type': undefined }
            })
            .success(function (resp) {
                var expectedDate = new Date();
                doc = GetHost(resp);
                //  alert(doc);
                var data = {
                    doc: doc,
                    id: $scope.id ,               
                    reason:'This is a Payout'
                };
                $http.post(GetApiUrl("adminPutDoc"), data).success(function (data, status) {
                    if (parseFloat(data) === 1) {
                        $window.location.href = "#investments_withdrawals";
                        $scope.error = undefined;
                    }
                    else {
                        $scope.error = "Something went wrong, please try again.";
                    }
                })
            })
        }
        else {
            $scope.error = "Please select the files!";
        }
    };
});