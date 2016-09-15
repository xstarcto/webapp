/**
 * Created by minghaox on 9/15/2016.
 */
var app = angular.module("firstapp", [])

app.run(function($rootScope) {
    $rootScope.name = "@MH WorkSpace"
})

app.controller('controller1', function ($scope) {
    $scope.person = {
        name : "minghao",
        name2 : "workspace",
        time : new Date()
    }
    
})

app.controller('ParentController', function ($scope) {
    $scope.person = {
        greeted : false,
        quality : "good"
    }
})

app.controller('ChildController', function ($scope) {
    $scope.sayHello = function () {
        alert("excellent!")
    }
    $scope.person.quality = "excellent"
})

app.controller('PlayerController', ['$scope', function ($scope) {
    $scope.playing = false;
    $scope.audio = document.createElement('audio')
    // $scope.audio.src = '../rsc/audio/Distance.mp3'
    $scope.audio.src = 'Distance.mp3'
    $scope.play = function () {
        $scope.audio.play();
        $scope.playing = true;
    }

    $scope.stop = function () {
        $scope.audio.pause();
        $scope.playing = false;
    }

    $scope.audio.addEventListener('ended', function () {
        $scope.$apply(function () {
            $scope.stop()
        })
    })
}])