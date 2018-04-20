'use strict';

var filter = require('./filter')
var include = require('./include')
var sort = require('./sort')
var filters = require('./filters')

module.exports = function(data) {
  var filter_data = {},
    include_data = {},
    sort_data = {};

  if(data.filter) {
    data.filter.forEach(function(item) {
      if(item.name === undefined
        || item.value === undefined
        || Object.keys(filters).indexOf(item.type) === -1) {
        return;
      }

      filter_data = Object.assign(filter_data, filter[item.type](item.name, item.value));
    })
  }

  if(data.include){
    include_data = include(data.include);
  }
  if(data.sort){
    sort_data = sort(data.sort);
  }
  return Object.assign(filter_data, include_data, sort_data);
}