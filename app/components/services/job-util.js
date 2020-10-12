<<<<<<< HEAD
angular.module('web')
  .factory('jobUtil', ['$q', '$state', '$timeout','$translate',
   function ($q, $state, $timeout, $translate) {
      var T = $translate.instant;
      return {
        getStatusLabel: getStatusLabel,
        getStatusCls: getStatusCls
      };
      function getStatusCls(s){
        if(!s)return 'default';
        switch(s.toLowerCase()){
          case 'running': return 'info';
          case 'verifying': return 'primary';
          case 'failed': return 'danger';
          case 'finished': return 'success';
          case 'stopped': return 'warning';
          case 'retrying': return 'warning';
          default : return 'default';
        }
=======
angular.module("web").factory("jobUtil", [
  "$q",
  "$state",
  "$timeout",
  "$translate",
  function ($q, $state, $timeout, $translate) {
    var T = $translate.instant;
    return {
      getStatusLabel: getStatusLabel,
      getStatusCls: getStatusCls,
    };
    function getStatusCls(s) {
      if (!s) return "default";
      switch (s.toLowerCase()) {
        case "running":
          return "info";
        case "verifying":
          return "primary";
        case "failed":
          return "danger";
        case "finished":
          return "success";
        case "stopped":
          return "warning";
        case "retrying":
          return "warning";
        default:
          return "default";
>>>>>>> a3c34812de130a3964bc82c152cfbffc0e61eba5
      }
    }

<<<<<<< HEAD
      function getStatusLabel(s, isUp){
        if(!s)return s;
        switch(s.toLowerCase()){
          case 'running': return isUp? T('status.running.uploading'):T('status.running.downloading');//'正在上传':'正在下载';
          case 'failed': return T('status.failed');//'失败';
          case 'finished': return T('status.finished');// '完成';
          case 'stopped': return T('status.stopped');//'暂停';
          case 'verifying': return T('status.verifying');//'';
          case 'retrying': return T('status.retrying');
          default : return T('status.waiting');//'等待';
        }
=======
    function getStatusLabel(s, isUp) {
      if (!s) return s;
      switch (s.toLowerCase()) {
        case "running":
          return isUp
            ? T("status.running.uploading")
            : T("status.running.downloading"); //'正在上传':'正在下载';
        case "failed":
          return T("status.failed"); //'失败';
        case "finished":
          return T("status.finished"); // '完成';
        case "stopped":
          return T("status.stopped"); //'暂停';
        case "verifying":
          return T("status.verifying"); //'';
        case "retrying":
          return T("status.retrying");
        default:
          return T("status.waiting"); //'等待';
>>>>>>> a3c34812de130a3964bc82c152cfbffc0e61eba5
      }
    }
  },
]);
