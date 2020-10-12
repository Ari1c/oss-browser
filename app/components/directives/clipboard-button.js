/*
 <input type="text" ng-model="abc" cleanable-input x="-3" y="-5"/>
 */

<<<<<<< HEAD
angular.module('web')
  .directive('clipboardButton', ['$translate','Toast', function($translate, Toast) {
=======
angular.module("web").directive("clipboardButton", [
  "$translate",
  "Toast",
  function ($translate, Toast) {
>>>>>>> a3c34812de130a3964bc82c152cfbffc0e61eba5
    var T = $translate.instant;
    return {
      restrict: "EA",
      scope: {
        action: "=",
        target: "=",
        success: "&",
      },
      link: function link(scope, ele) {
        var d = new Clipboard(ele[0], {
          text: function () {
            return $(scope.target).val();
          },
          action: scope.action || "copy",
        });

<<<<<<< HEAD
        d.on('success',function(){
          Toast.success(T('copy.successfully')); //'复制成功'
=======
        d.on("success", function () {
          Toast.success(T("copy.successfully")); //'复制成功'
>>>>>>> a3c34812de130a3964bc82c152cfbffc0e61eba5
        });
      },
    };
  },
]);
