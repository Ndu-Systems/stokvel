app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
         .when('/404', {
             templateUrl: 'pages/common/404.html',
             controller: '404Controller'
         })
        .when('/', {
            templateUrl: 'pages/account/login.html',
            controller: 'loginController'
        })
         .when('/login', {
             templateUrl: 'pages/account/login.html',
             controller: 'loginController'
         })
         .when('/logout', {
             templateUrl: 'pages/account/logout.html',
             controller: 'logoutController'
         })
         .when('/invest', {
             templateUrl: 'pages/investment/invest.html',
             controller: 'investController'
         })
         .when('/Pending-Withdrawals', {
             templateUrl: 'pages/investment/Pendings.html',
             controller: 'PendingsController'
         })
          .when('/new-invest', {
              templateUrl: 'pages/investment/newinvestment.html',
              controller: 'newInvestmentController'
          })
         .when('/active-investments', {
             templateUrl: 'pages/investment/activeinvestment.html',
             controller: 'activeInvestmentController'
         })
         .when('/History', {
             templateUrl: 'pages/investment/History.html',
             controller: 'closedInvestmentController'
         })
          .when('/Matured', {
              templateUrl: 'pages/investment/Matured.html',
              controller: 'WithdrawInvestmentController'
          })
        .when('/approved-investments', {
            templateUrl: 'pages/investment/approvedInvestments.html',
            controller: 'approvedInvestmentController'
        })
        .when('/pending-investments', {
            templateUrl: 'pages/investment/pendingInvestments.html',
            controller: 'pendingInvestmentController'
        })
          .when('/upload', {
              templateUrl: 'pages/investment/upload.html',
              controller: 'uploadController'
          })
          .when('/register', {
              templateUrl: 'pages/account/register.html',
              controller: 'registerController'
          })
         .when('/my-dashboard', {
             templateUrl: 'pages/customer/customer_dash.html',
             controller: 'dashController'
         })
          .when('/dashboard', {
              templateUrl: 'pages/admin/admin_dash.html',
              controller: 'administratorController'
          })
        .when('/registerAdmin', {
         templateUrl: 'pages/admin/registerAdmin.html',
         controller: 'registerAdminController'
        })
         .when('/users', {
             templateUrl: 'pages/admin/users.html',
             controller: 'usersController'
         })
        .when('/users_customers', {
            templateUrl: 'pages/admin/users_customers.html',
            controller: 'usersController'
        })
     .when('/users_admins', {
         templateUrl: 'pages/admin/users_admins.html',
         controller: 'usersController'
     })
     .when('/investments', {
         templateUrl: 'pages/admin/investments.html',
         controller: 'admin_investmentsController'
     })
     .when('/investments_new', {
         templateUrl: 'pages/admin/investments_new.html',
         controller: 'admin_investmentsController'
     })
     .when('/investments_history', {
         templateUrl: 'pages/admin/investments_closed.html',
         controller: 'admin_investmentsController'
     })
     .when('/investments_approved', {
         templateUrl: 'pages/admin/investments_approved.html',
         controller: 'admin_investmentsController'
     })
     .when('/investments_confirm', {
         templateUrl: 'pages/admin/investments_confirm.html',
         controller: 'admin_investmentsController'
     })
    .when('/investments_withdrawals', {
                templateUrl: 'pages/admin/investments_withdrawals.html',
                controller: 'admin_investmentsController'
            })
     .when('/approve', {
           templateUrl: 'pages/admin/approve.html',
           controller: 'approve_investmentController'
     })
       .when('/decline', {
           templateUrl: 'pages/admin/decline.html',
           controller: 'decline_investmentController'
       })
     .when('/confirm', {
         templateUrl: 'pages/admin/confirm.html',
         controller: 'confirm_investmentController'
     })
     .when('/editCustomer', {
         templateUrl: 'pages/admin/editCustomer.html',
         controller: 'editCustomerController'
     })
      .when('/disableCustomer', {
          templateUrl: 'pages/admin/disableCustomer.html',
          controller: 'disableCustomerController'
      })
       .when('/announcements', {
            templateUrl: 'pages/admin/announcements.html',
            controller: 'admin_announcementsController'
       })
      .when('/announcement_new', {
          templateUrl: 'pages/admin/announcements_new.html',
          controller: 'withdrawController'
      })
          .when('/Withdraw', {
              templateUrl: 'pages/transiction/Withdraw.html',
              controller: 'reInvestController'
          })
           .when('/Re-Invest', {
               templateUrl: 'pages/transiction/ReInvest.html',
               controller: 'reInvestController'
           })
     .when('/announcement_me', {
         templateUrl: 'pages/admin/announcements_me.html',
         controller: 'my_announcementsController'
     })
     .when('/closeWithdrawal', {
         templateUrl: 'pages/admin/closeWithdrawal.html',
         controller: 'close_investmentController'
     })
    .when('/confirm-payments', {
        templateUrl: 'pages/transiction/confirmPayments.html',
        controller: 'dashController'
    })
        .when('/paymentRecieved', {
            templateUrl: 'pages/transiction/paymentRecieved.html',
            controller: 'paymentRecievedController'
        })
      .when('/myprofile', {
          templateUrl: 'pages/customer/myprofile.html',
          controller: 'profileController'
      });
});
 

