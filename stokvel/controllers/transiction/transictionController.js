app.controller('withdrawController', function ($http, $scope, $window) {
    $scope.message = undefined;
    alert("withdrawController");
    $scope.Register = function () {
        var name = $scope.name;
        var email = $scope.email;
        var cell = $scope.cell;
        var password = $scope.password;
        var passwordConfirm = $scope.passwordConfirm;

        var bankName = $scope.bankName;
        var branchCode = $scope.branchCode;
        var bankAccountNo = $scope.bankAccountNo;
       
        var data = {    
            name: name,
            email: email,
            cell: cell,
            password: password,
            passwordConfirm: passwordConfirm,
            bankName: bankName,
            branchCode: branchCode,
            bankAccountNo: bankAccountNo
        };

        $http.post(GetApiUrl("addClient"), data)
        .success(function (response, status) {
            if (response === "1") {
                 $scope.message = "Halala !!!";
                localStorage.setItem("email", $scope.email);
                localStorage.setItem("name", $scope.name);
                $window.location.href = "#my-dashboard";

            } else {
                $scope.message = response;
            }
        });
    };
});
app.controller('reInvestController', function ($http, $scope, $window) {
    $scope.amount = localStorage.getItem("amount");
    $scope.investmentId = localStorage.getItem("investmentId");
    //var today = new Date();
    //alert(today);

    $scope.SaveReinvest = function () {
        $scope.message = undefined;

        if (!isNaN($scope.amount_in)) {
            if (parseFloat($scope.amount_in) > parseFloat($scope.amount)) {
                $scope.message = "Amount you entered exceed your balance!";
            } else {
                //all is well
                var balance = (parseFloat($scope.amount)*1.5) - parseFloat($scope.amount_in);
                var data = {
                    date       : new Date(),   
                    expectedDate :"n/a",  
                    email      : localStorage.getItem("email"),  
                    doc: localStorage.getItem("doc"),
                    newAmount : $scope.amount_in,
                    balance: balance,
                    id :  $scope.investmentId


                }

                $http.post(GetApiUrl("reInvest"), data)
       .success(function (response, status) {
           $scope.message = response;
           $window.location.href = "#my-dashboard";          
       });

            }

        } else {
            $scope.message = "Please Enter a valid number";
        }
    }
});

app.controller('paymentRecievedController', function ($http, $scope, $window) {
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


    $scope.confirmPayment = function () {
        var _reason = $scope.reason;
        var data = {
            id: $scope.id,
            amount: $scope.amount,
            date: $scope.date,
            expectedDate: $scope.expectedDate,
            email: $scope.email,
            reason: 'Proof Of Payment Valid',
            status: 'Closed'
        };
        $http.post(GetApiUrl("updateInvestment"), data).success(function (data, status) {
            if (parseFloat(data) === 1) {
                $window.location.href = "#confirm-payments";
                $scope.error = undefined;
            }
            else {
                $scope.error = "Something Went Wrong, Please Try Again";
            }
        })

    };
});

