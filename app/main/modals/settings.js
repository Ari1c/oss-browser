"use strict";

angular.module("web").controller("settingsCtrl", [
  "$scope",
  "$state",
  "$timeout",
  "$uibModalInstance",
  "$translate",
  "callback",
  "settingsSvs",
  "Mailer",
  "Toast",
  "Dialog",
  "Const",
  function (
    $scope,
    $state,
    $timeout,
    $modalInstance,
    $translate,
    callback,
    settingsSvs,
    Mailer,
    Toast,
    Dialog,
    Const
  ) {
    var T = $translate.instant;
    angular.extend($scope, {
      showTab: 3,
      set: {
        autoUpgrade: settingsSvs.autoUpgrade.get(),
        maxUploadJobCount: settingsSvs.maxUploadJobCount.get(),
        maxDownloadJobCount: settingsSvs.maxDownloadJobCount.get(),
        showImageSnapshot: settingsSvs.showImageSnapshot.get(),
<<<<<<< HEAD
        historiesLength : settingsSvs.historiesLength.get(),
        mailSmtp : settingsSvs.mailSmtp.get(),
=======
        historiesLength: settingsSvs.historiesLength.get(),
        mailSmtp: settingsSvs.mailSmtp.get(),
>>>>>>> a3c34812de130a3964bc82c152cfbffc0e61eba5
        logFile: settingsSvs.logFile.get(),
        logFileInfo: settingsSvs.logFileInfo.get(),
        connectTimeout: settingsSvs.connectTimeout.get(),
        uploadPartSize: settingsSvs.uploadPartSize.get(),
<<<<<<< HEAD
        uploadAndDownloadRetryTimes: settingsSvs.uploadAndDownloadRetryTimes.get()
=======
        downloadConcurrecyPartSize: settingsSvs.downloadConcurrecyPartSize.get(),
        uploadAndDownloadRetryTimes: settingsSvs.uploadAndDownloadRetryTimes.get(),
>>>>>>> a3c34812de130a3964bc82c152cfbffc0e61eba5
      },
      reg: {
        email: Const.REG.EMAIL,
      },
      setChange: setChange,
      cancel: cancel,

      testMail: testMail,
<<<<<<< HEAD
      openDebug: openDebug
    });
    var tid;
    var { ipcRenderer} = require('electron');
    function setChange(form1, key, ttl){
      $timeout.cancel(tid);
      tid=$timeout(function(){
        if(!form1.$valid)return;
        settingsSvs[key].set( $scope.set[key] );
        Toast.success(T('settings.success')); //已经保存设置
        if (key == 'logFile' || key == "logFileInfo" || key == "uploadPartSize" || key == "uploadAndDownloadRetryTimes" ) {
          ipcRenderer.send('asynchronous', {key: 'refreshPage'});
        }
      },ttl||100);

=======
      openDebug: openDebug,
    });
    var tid;
    var { ipcRenderer } = require("electron");
    function setChange(form1, key, ttl) {
      $timeout.cancel(tid);
      tid = $timeout(function () {
        if (!form1.$valid) return;
        settingsSvs[key].set($scope.set[key]);
        Toast.success(T("settings.success")); //已经保存设置
        if (
          key == "logFile" ||
          key == "logFileInfo" ||
          key == "uploadPartSize" ||
          key == "uploadAndDownloadRetryTimes"
        ) {
          ipcRenderer.send("asynchronous", { key: "refreshPage" });
        }
      }, ttl || 100);
>>>>>>> a3c34812de130a3964bc82c152cfbffc0e61eba5
    }

    function cancel() {
      if (callback) callback();
      $modalInstance.dismiss("close");
    }

    function testMail() {
      var title = T("mail.test.title"); //测试邮件
      var message = T("mail.test.message", { from: $scope.set.mailSmtp.from }); //将发送测试邮件到
      Dialog.confirm(title, message, function (b) {
        if (!b) return;
        Toast.info(T("mail.send.on"));
        Mailer.send({
          subject: "OSS Browser Test",
          to: $scope.set.mailSmtp.from,
          html: "test",
        }).then(
          function (result) {
            console.log(result);
            Toast.success(T("mail.test.success")); // 邮件发送成功');
          },
          function (err) {
            console.error(err);
            Toast.error(err);
          }
        );
      });
    }

<<<<<<< HEAD
    function openDebug () {
      ipcRenderer.send('asynchronous', {key: 'openDevTools'});
    }

  }])
;
=======
    function openDebug() {
      ipcRenderer.send("asynchronous", { key: "openDevTools" });
    }
  },
]);
>>>>>>> a3c34812de130a3964bc82c152cfbffc0e61eba5
