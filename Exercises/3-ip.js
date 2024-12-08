"use strict";

const ipToInt = (ip = '127.0.0.1') => {
 const ipNew = ip.split('.').map((e) => parseInt(e))
 const fn = (x,val) => (x<<8)+val
 return ipNew.reduce(fn,0)
};

module.exports = { ipToInt };
