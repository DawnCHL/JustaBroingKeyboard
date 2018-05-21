
const superagent = require('superagent');
const request = require('superagent-defaults')(superagent);

request.on('request', function (req) {
  
  // 默认24秒超时
  req.timeout(req._timeout || (24 * 1000));
  // 请求地址加时间戳
  req.query({
    '__t': +(new Date())
  })
  req.set('X-Requested-With', 'XMLHttpRequest')
});

module.exports = request;
