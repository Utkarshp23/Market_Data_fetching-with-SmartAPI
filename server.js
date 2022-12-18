// var exp = require('express')
// var fetch = require('node-fetch')
import fetch from 'node-fetch'
import exp from 'express'
import { SmartAPI, WebSocket } from 'smartapi-javascript'
// let { SmartAPI, WebSocket } = require("smartapi-javascript");

var app = exp();

var data = JSON.stringify({
  "clientcode": "U66285",
  "password": "investingme2",
  "totp": "2826"
})

var config = {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-UserType': 'USER',
    'X-SourceID': 'WEB',
    'X-ClientLocalIP': '192.168.43.8',
    'X-ClientPublicIP': '192.168.43.8',
    'X-MACAddress': '84:4B:F5:D0:58:F5',
    'X-PrivateKey': 'YPHd51uN'
  },
  data: data
};

var loginInfo = {}
var access_token = ''
var feed_token = ''
var refresh_token = ''

fetch('https://apiconnect.angelbroking.com//rest/auth/angelbroking/user/v1/loginByPassword', config)
  .then(res => {
    // loginInfo = res.json();
    // access_token = loginInfo.data.jwtToken;
    // feed_token = loginInfo.data.feedToken;
    // refresh_token = loginInfo.data.refreshToken
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

console.log(access_token)
console.log(feed_token)
console.log(refresh_token)
// let smart_api = new SmartAPI({
//   api_key: 'YPHd51uN',
//   access_token: "93e094da-a8cc-4c43-bd8b-33b187d67808",
// })
// // smart_api.generateSession('U66285','investingme2')
// smart_api.generateSession("U66285", "investingme2")
//   .then((data) => {
//     // console.log(smart_api.getProfile())
//     return smart_api.getProfile()
//   })
//   .then(profile => console.log(profile))


app.listen(9000, console.log('Server started...'))