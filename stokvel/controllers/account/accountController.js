app.controller('registerController', function ($http, $scope, $window) {
    $scope.message = undefined;
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
                //Send email
                var emailObj = {
                    email : localStorage.getItem("email"),
                    body : welcome,
                    name :localStorage.getItem("name"),
                    subject: "Welcome to black Friday",
                    from : "noreply@black-friday.co.za"
                };
                $http.post("http://ndu-systems.net/Api/email.php", emailObj)
               .success(function (response) {
                   console.log(response);
                   alert(response);
               })
            .error(function (error) {
                console.error(error);
            });
            
                // End Send Email
                localStorage.setItem("isLoggedIn", true);

                $window.location.href = "#my-dashboard";

            } else {
                $scope.message = response;
            }
        });
    };
});
app.controller('loginController', function ($http, $scope, $window) {
    var me = this;
    if (localStorage.getItem("isLoggedIn") === "true") {
        $window.location.href = "#my-dashboard";
    }
    $scope.message = "I forgot my login details";
    $scope.Login = function () {
        var email = $scope.email;
        var password = $scope.password;


        var data = {
            email: email,
            password: password
        };

        $http.post(GetApiUrl("Login"), data)
        .success(function (response, status) {
            if (response.length !== 0) {
                var user = response.client[0];

                localStorage.setItem("name", user.name);
                localStorage.setItem("surname", user.username);
                email: localStorage.setItem("email", user.email);
               
                localStorage.setItem("isLoggedIn", true);
                me.message = undefined;
                if (user.role == "client") {
                    $window.location.href = "#my-dashboard";
                }
                else {
                    $window.location.href = "#dashboard";
                }
           
            }
            else {
                $scope.message = "Your login credentials were not correct, please try again.";
            }
        });
    };
});

app.controller('logoutController', function ($http, $scope, $window) {
    localStorage.clear();
    $window.location.href = "#login";

});


