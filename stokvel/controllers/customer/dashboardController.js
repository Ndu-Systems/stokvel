
app.controller('dashController', function ($http, $scope, $window) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }

    $scope.newInvestments = 0;
    $scope.aprovedInvestments = 0;
    $scope.pendingInvestments = 0;
    $scope.activeInvestments = 0;
    $scope.closedInvestments = 0;
    $scope.readyInvestments = 0;
    $scope.pendingWithdrawls = 0;
    $scope.confirmPayments = 0;

    $scope.name = localStorage.getItem("name");
    var data = {
        username: localStorage.getItem("email")
    };

    $http.post(GetApiUrl("getInvestments"), data).success(function (data, status) {
        $scope.investments = data.investments;
        //get coiunts 
        var countNew = 0;
        var countApproved = 0;
        var countPending = 0;
        var countActive = 0;
        var countClosed = 0;
        var countReady = 0;
        var countPendingWithdrawal = 0;
        var countConfirmPayments = 0;

        angular.forEach($scope.investments, function (item) {
            if (item.status === "New") {
                countNew++;
            }
            if (item.status === "Approved") {
                countApproved++;
            }
            if (item.status === "Pending") {
                countPending++;
            }
            if (item.status === "Active") {
                countActive++;
            }
            if (item.status === "Closed") {
                countClosed++;
            }
            if (item.status === "Ready") {
                countReady++;
            }
            if (item.status === "Withdraw") {
                countPendingWithdrawal++;
            }
            if (item.status === "confirmClose") {
                countConfirmPayments++;
            }
        });
        $scope.newInvestments = countNew;
        $scope.aprovedInvestments = countApproved;
        $scope.pendingInvestments = countPending;
        $scope.activeInvestments = countActive;
        $scope.closedInvestments = countClosed;
        $scope.readyInvestments = countReady;
        $scope.pendingWithdrawls = countPendingWithdrawal;
        $scope.confirmPayments = countConfirmPayments;
    })
        $scope.viewPay = function (item) {
        localStorage.setItem("id", item.id);
        localStorage.setItem("amount", item.amount);
        localStorage.setItem("date", item.date);
        localStorage.setItem("expectedDate", item.expectedDate);
        localStorage.setItem("email", item.email);
        localStorage.setItem("status", item.status);
        localStorage.setItem("doc", item.doc);
        $window.location.href = "#paymentRecieved"
    }
});

app.controller('profileController', function ($http, $scope, $window) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }   
    $scope.email = localStorage.getItem("email");
    var data1 = {
       email : $scope.email
    };
    $http.post(GetApiUrl("profile"), data1).success(function (response, status) {
        if (response.length !== 0) {
            var user = response.client[0];

            localStorage.setItem("name", user.name);
            localStorage.setItem("surname", user.username);
            localStorage.setItem("email", user.email);
            localStorage.setItem("clienId", user.clienId);
            localStorage.setItem("status", user.status);
            //Banking details On Login 
            localStorage.setItem("bankName", user.bankName);
            localStorage.setItem("branchCode", user.branchCode);
            localStorage.setItem("bankAccountNo", user.bankAccountNo);
            //contact details
            localStorage.setItem("cell", user.cell);
        }
    })
    $scope.name = localStorage.getItem("name");
    $scope.bankName = localStorage.getItem("bankName");
    $scope.branchCode = localStorage.getItem("branchCode");
    $scope.bankAccountNo = localStorage.getItem("bankAccountNo");  
    $scope.cell = localStorage.getItem("cell");
    $scope.clienId = localStorage.getItem("clienId");    
    $scope.error = undefined;
    $scope.status = localStorage.getItem("status");

    $scope.updateProfile = function () {
        var data = {
            clienId: $scope.clienId,
            name: $scope.name,
            email: $scope.email,
            bankName: $scope.bankName,
            branchCode: $scope.branchCode,
            bankAccountNo: $scope.bankAccountNo,
            cell: $scope.cell,
            status: $scope.status
        };
        if (data.name != undefined && data.email != undefined && data.bankName != undefined && data.branchCode != undefined && data.bankAccountNo && data.cell != undefined) {
            $http.post(GetApiUrl("updateUser"), data).success(function (data, status) {
                if (parseFloat(data) === 1) {
                    $window.location.href = "#my-dashboard";
                    $scope.error = "Profile Updated !!!";
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