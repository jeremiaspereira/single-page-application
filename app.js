
  var app = angular.module('myapp', ['ui.router']);

  var usuarios = this;
  usuarios = [
    {
      id:1, nome: 'João', email: 'joao@gmail.com', idade: 25
    },
    {
      id:2, nome: 'Maria', email: 'maria@gmail.com', idade: 21
    },
    {
      id:3, nome: 'Joana', email: 'joana@gmail.com', idade: 35
    },
    {
      id:4, nome: 'Fulano', email: 'fulano@gmail.com', idade: 30
    }
  ];

  app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('home');
    $stateProvider
      .state('home', {
        url: "",
        views: {
          "header": { templateUrl: "template/header.html" },
          "conteudo": { templateUrl: "pages/home.html" }
        }
      })

      .state('usuarios', {
        url: "/usuarios",
        views: {
          "header": { templateUrl: "template/header.html" },
          "conteudo": { templateUrl: "pages/usuarios.html" },
          "footer": { templateUrl: "template/footer.html" },
        },
        controller: 'UsuariosCtrl'
      })

      .state('usuarios.detalhes', {
        url: "/:id",
        views: {
          "usuarios.detalhes": { templateUrl: "pages/usuarios.detalhes.html" },
        },
          controller: 'UsuariosCtrl.detalhes'
      });
  }]);

  app.controller("UsuariosCtrl", ['$scope', function ($scope) {
    $scope.usuarios = usuarios;
  }]);

  app.controller("UsuariosCtrl.detalhes", ['$scope','$stateParams', function ($scope, $stateParams) {
    angular.forEach(usuarios, function(usuario) {
      if (usuario.id == $stateParams.id){
        $scope.usuario = usuario;
      }
    });
  }]);
