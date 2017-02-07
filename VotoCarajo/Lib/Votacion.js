var vcApp = angular.module('vcApp', [
]);

vcApp.controller('votacionCtr', function ($scope, $http) {
    $scope.enviarSugerencia = function () {
        notifyMe('De ' + $scope.Usuario, $scope.Mensaje);
    };
    $scope.init = function () {
        $scope.Usuario = document.getElementById('hdnUsuario').value;
    };
    /*
    $scope.titulo = items.titulo;
    $scope.descripcion = items.descripcion;
    $scope.aceptar = function () {
        $uibModalInstance.close(items);
    };

    $scope.cancelar = function () {
        $uibModalInstance.dismiss('cancel');
    };

    fmAPI.getReunion = function (id) {
        return $http({
            method: 'GET',
            withCredentials: true,
            url: 'api/voto/' + id
        });
    }
    */
    $scope.init();
});

//
// request permission on page load
document.addEventListener('DOMContentLoaded', function () {
    if (Notification.permission !== "granted")
        Notification.requestPermission();
});

function notifyMe(titulo, mensaje) {
    if (!Notification) {
        alert('Tu browser va para atrás de viejo, cambiate a uno más nuevo.');
        return;
    }

    if (Notification.permission !== "granted")
        Notification.requestPermission();
    else {
        var notification = new Notification(titulo, {
            icon: 'http://www.carajoweb.com/grafica/catalogo_18a.jpg',
            body: mensaje,
        });
        /*
        notification.onclick = function () {
            window.open("http://stackoverflow.com/a/13328397/1269037");
        };
        */
    }

}
