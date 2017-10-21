app.controller('administratorController', function ($http, $scope, $window) {

    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }

    $scope.members = 0;
    $scope.investments = 0;
    $scope.withdrawals = 0;
    $scope.announcements = 0;

    $scope.name = localStorage.getItem("name");
    //var data = {
    //    username: localStorage.getItem("email")
    //};

    $http.post(GetApiUrl("getClients")).success(function (data, status) {
        $scope.users = data.client;
        //counts clients only
        var countMembers = 0;
        angular.forEach($scope.users, function (item) {
            if (item.Status === "active" && item.role === "client") {
                countMembers++;
            }
        });
        //Finish
        $scope.members = countMembers;
    })
    $http.post(GetApiUrl("getInvestments2")).success(function (data, status) {
        $scope.investments = data.investments;
        //Counts
        var countInvestments = 0;
        var countWithdrawals = 0;
        angular.forEach($scope.investments, function (item) {

            if (item.status === "New") {
                countInvestments++;
            }
            if (item.status === "Ready") {
                countWithdrawals++;
            }
        });
        $scope.investments = countInvestments;
        $scope.withdrawals = countWithdrawals;
    })

});
app.controller('registerAdminController', function ($http, $scope, $window) {

    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }
    $scope.name = localStorage.getItem("name");
    $scope.message = "Add A Member To Your Team";
    $scope.Register = function () {
        var name = $scope.fullname;
        var email = $scope.email;
        var cell = $scope.cell;

        var data = {
            fullname: name,
            email: email,
            cell: cell,
            password: "Password01",
            passwordConfirm: "Password01",
            bankName: "na",
            branchCode: "na",
            bankAccountNo: "na"
        };
        $http.post(GetApiUrl("addAdmin"), data)
        .success(function (response, status) {
            if (response === "1") {

                $window.location.href = "#dashboard";

            } else {
                $scope.message = response;
            }
        });
    };
});
app.controller('usersController', function ($http, $scope, $window) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }
    $scope.name = localStorage.getItem("name");
    $http.post(GetApiUrl("getClients")).success(function (data, status) {
        $scope.users = data.client;
    })

    $scope.getCustomer = function (item) {
        localStorage.setItem("clienId", item.clienId);
        localStorage.setItem("Cname", item.name);
        localStorage.setItem("email", item.email);
        localStorage.setItem("bankName", item.bankName);
        localStorage.setItem("branchCode", item.branchCode);
        localStorage.setItem("bankAccountNo", item.bankAccountNo);
        localStorage.setItem("cell", item.cell);
        localStorage.setItem("status", item.Status);
        $window.location.href = "#editCustomer"
    }
    $scope.disableCustomer = function (item) {
        localStorage.setItem("clienId", item.clienId);
        localStorage.setItem("Cname", item.name);
        localStorage.setItem("email", item.email);
        localStorage.setItem("bankName", item.bankName);
        localStorage.setItem("branchCode", item.branchCode);
        localStorage.setItem("bankAccountNo", item.bankAccountNo);
        localStorage.setItem("cell", item.cell);
        localStorage.setItem("status", item.Status);
        $window.location.href = "#disableCustomer"
    }
    
});
app.controller('editCustomerController', function ($http, $scope, $window) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }
    $scope.name = localStorage.getItem("name");

    $scope.clienId = localStorage.getItem("clienId");
    $scope.Cname = localStorage.getItem("Cname");
    $scope.email = localStorage.getItem("email");
    $scope.bankName = localStorage.getItem("bankName");
    $scope.branchCode = localStorage.getItem("branchCode");
    $scope.bankAccountNo = localStorage.getItem("bankAccountNo");
    $scope.cell = localStorage.getItem("cell");
    $scope.status = localStorage.getItem("status");
  
    $scope.updateCustomer = function () {
        var data = {
            clienId: $scope.clienId,
            name: $scope.Cname,
            email: $scope.email,
            bankName: $scope.bankName,
            branchCode: $scope.branchCode,
            bankAccountNo: $scope.bankAccountNo,
            cell: $scope.cell,
            status: $scope.status
        };
        if (data.name != undefined && data.email != undefined && data.bankName != undefined && data.branchCode != undefined && data.bankAccountNo && data.cell != undefined) {
            $http.post(GetApiUrl("updateUser"),data).success(function (data, status) {
                if (parseFloat(data) === 1) {
                    $window.location.href = "#users_customers";
                    $scope.error = undefined;
                }
                else {
                    $scope.error = "Something Went Wrong, Please Try Again";
                }
            })

        }
        else {
            $scope.error = "Please do not submit EMPTY forms";
        }
    }
});
app.controller('disableCustomerController', function ($http, $scope, $window) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }
    $scope.name = localStorage.getItem("name");

    $scope.clienId = localStorage.getItem("clienId");
    $scope.Cname = localStorage.getItem("Cname");
    $scope.email = localStorage.getItem("email");
    $scope.bankName = localStorage.getItem("bankName");
    $scope.branchCode = localStorage.getItem("branchCode");
    $scope.bankAccountNo = localStorage.getItem("bankAccountNo");
    $scope.cell = localStorage.getItem("cell");
    $scope.status = localStorage.getItem("status");

    $scope.dissableCustomer = function () {
        var data = {
            clienId: $scope.clienId,
            name: $scope.Cname,
            email: $scope.email,
            bankName: $scope.bankName,
            branchCode: $scope.branchCode,
            bankAccountNo: $scope.bankAccountNo,
            cell: $scope.cell,
            status: 'Disabled'
        };
        $http.post(GetApiUrl("updateUser"), data).success(function (data, status) {
                if (parseFloat(data) === 1) {
                    $window.location.href = "#users_customers";
                    $scope.error = undefined;
                }
                else {
                    $scope.error = "Something Went Wrong, Please Try Again";
                }
            })    
       
    }
});
