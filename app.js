const http = require('http');
const opay_payment = require('opay_payment_nodejs');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  let base_param = {
      MerchantTradeNo: 'f0a0d7e9fae1bb72bc93', //請帶20碼uid, ex: f0a0d7e9fae1bb72bc93
      MerchantTradeDate: '2017/02/13 15:45:30', //ex: 2017/02/13 15:45:30
      TotalAmount: '100',
      TradeDesc: '測試交易描述',
      ItemName: '測試商品等',
      ReturnURL: 'http://192.168.0.1',
  };

  let inv_params = {};

  let create = new opay_payment();
  let htm = create.payment_client.aio_check_out_credit_onetime(parameters = base_param, invoice = inv_params);

  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(htm);
  response.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
