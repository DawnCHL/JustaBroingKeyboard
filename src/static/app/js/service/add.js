var request = require('../lib/request.js');
var op = require('object-path');

exports.addApi = function (options) {
  return new Promise(function (resolve, reject) {
    request.post('/api/insert')
      .set('content-Type','application/json')
      .send(options)
      .end(function (err, res) {
        if (err) {
          return reject(err);
        }
        return resolve(op.get(res, 'body'));
      });
  });;
};