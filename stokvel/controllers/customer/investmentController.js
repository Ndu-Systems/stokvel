app.controller('investController', function ($http, $scope, $window) {
    $scope.amount = undefined;
    var today = getDate();
    var me = this;

    $scope.Invest = function () {
        $scope.message = undefined;
        if (!isNaN($scope.amount)) {
            var email = localStorage.getItem("email");
            var data = {
                email: email,
                amount: $scope.amount,
                date: today,
                doc: "n/a",
                expectedDate: "n/a"
            };

            $http.post(GetApiUrl("Invest"), data)
            .success(function (response, status) {
                if (response === "1") {
                    $scope.message = "Your request has been verified and awaiting approval";
                }
                else {
                    $scope.message = "Your request has been verified and awaiting approval";
                }

            });
        } else {
            $scope.message = "Oops something went wrong please try again";
        }
    }
});

app.controller('newInvestmentController', function ($http, $scope, $window) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }

    $scope.name = localStorage.getItem("name");
    var data = {
        username: localStorage.getItem("email")
    };

    $http.post(GetApiUrl("getNewInvestments"), data).success(function (data, status) {
        $scope.investments = data.investments;
    })

});


app.controller('approvedInvestmentController', function ($http, $scope, $window) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }

    $scope.name = localStorage.getItem("name");
    var data = {
        username: localStorage.getItem("email")
    };

    $http.post(GetApiUrl("getApprovedInvestments"), data).success(function (data, status) {
        $scope.investments = data.investments;
    })

    $scope.UploadDoc = function (item) {
        localStorage.setItem("id", item.id);
        $window.location.href = "#upload";
    }
});

app.controller('uploadController', function ($http, $scope, $window) {
    $scope.id = localStorage.getItem("id");
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
                    id: $scope.id,
                    date:Date(),
                    expectedDate: expectedDate
                };
                $http.post(GetApiUrl("putDoc"), data).success(function (data, status) {
                    if (parseFloat(data) === 1) {
                        $window.location.href = "#my-dashboard";
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



app.controller('pendingInvestmentController', function ($http, $scope, $window) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }

    $scope.name = localStorage.getItem("name");
    var data = {
        username: localStorage.getItem("email")
    };

    $http.post(GetApiUrl("getPendingInvestments"), data).success(function (data, status) {
        $scope.investments = data.investments;
    })

});

app.controller('activeInvestmentController', function ($http, $scope, $window) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }

    $scope.name = localStorage.getItem("name");
    var data = {
        username: localStorage.getItem("email")
    };

    $http.post(GetApiUrl("getActiveInvestments"), data).success(function (data, status) {
        $scope.investments = data.investments;
    })

});

app.controller('closedInvestmentController', function ($http, $scope, $window) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }

    $scope.name = localStorage.getItem("name");
    var data = {
        username: localStorage.getItem("email")
    };

    $http.post(GetApiUrl("getClosedInvestments"), data).success(function (data, status) {
        $scope.investments = data.investments;
    })

});


app.controller('WithdrawInvestmentController', function ($http, $scope, $window) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }

    $scope.name = localStorage.getItem("name");
    var data = {
        username: localStorage.getItem("email")
    };

    $http.post(GetApiUrl("getReadyInvestments"), data).success(function (data, status) {
        $scope.investments = data.investments;
    })

    $scope.Withdraw = function (investment) {
      
        var data = {
            id: investment.id
        };
        $http.post(GetApiUrl("withdraw"), data)
      .success(function (response, status) {
          $scope.message = response;
          $window.location.href = "#my-dashboard";

      });
    }

    $scope.Reinvest = function (investment) {
        localStorage.setItem("amount", investment.amount);
        localStorage.setItem("investmentId", investment.id);
        localStorage.setItem("doc", investment.doc);

        $window.location.href = "#Re-Invest";
    }

});

app.controller('PendingsController', function ($http, $scope, $window) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }

    $scope.name = localStorage.getItem("name");
    var data = {
        username: localStorage.getItem("email")
    };

    $http.post(GetApiUrl("getPendingsInvestments"), data).success(function (data, status) {
        $scope.investments = data.investments;
    })

});