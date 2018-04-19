'use strict';

module.exports = function(data) {
  if(typeof data !== 'object') {
    data = [data];
  }
  return { 'sort': data };
}