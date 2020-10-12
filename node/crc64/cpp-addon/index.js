<<<<<<< HEAD
var path = require('path');
var fs = require('fs');
var CRC64 = require('./crc64');

exports.crc64 = function(buf, pre){
   return CRC64.check(pre||'0', buf)
};
exports.crc64File = function (p, fn){
  if(!CRC64){
    console.warn('not found crc64 module');
=======
var path = require("path");
var fs = require("fs");
var CRC64 = require("./crc64");

exports.crc64 = function (buf, pre) {
  return CRC64.check(pre || "0", buf);
};
exports.crc64File = function (p, fn) {
  if (!CRC64) {
    console.warn("not found crc64 module");
>>>>>>> a3c34812de130a3964bc82c152cfbffc0e61eba5
    fn(null, null);
    return;
  }
  //console.time('get crc64 hash for ['+p+']');
<<<<<<< HEAD
  var stream = fs.createReadStream(p, {autoClose: true});
  CRC64.check_stream(stream, function(err, data){
=======
  var stream = fs.createReadStream(p, { autoClose: true });
  CRC64.check_stream(stream, function (err, data) {
>>>>>>> a3c34812de130a3964bc82c152cfbffc0e61eba5
    //stream.close();
    //console.timeEnd('get crc64 hash for ['+p+']');
    fn(err, data);
  });
};
