/**
 * Author: Thien Le
 * Github: http://github.com/thienle75
 * Module dependencies.
 * This is the join controller
 */
(function() {
  'use strict';

  angular
    .module('app')
    .controller('JoinCtrl', JoinCtrl);

  JoinCtrl.$inject = ['$location', '$scope', '$localStorage', 'socket'];

  function JoinCtrl($location, $scope, $localStorage, socket) {
    $scope.name = '';
    var nickname;

    $scope.join = function() {
      nickname = $scope.name;
      $localStorage.nickname = nickname;

      socket.emit('join', {
        nickname: nickname
      });

      $location.path('/main');
    }

  }
})();