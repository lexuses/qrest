'use strict';

var filter = function(name, delimeter = '.'){
  return function(field, value, negative) {
    if(negative) {
      field = '-' + field;
    }
    return { [`filter{${field}${delimeter}${name}}`]: value };
  }
}

var filter_array = function(name){
  return function(field, value) {
    return { [`filter{${field}.${name}}`]: value };
  }
}

var filter_bool = function(ex){
  if(ex) {
    ex = 1;
  } else {
    ex = 0;
  }
  return function(field) {
    return { [`filter{${field}.isnull}`]: ex };
  }
}

module.exports = {
  equal: filter('', ''),
  in: filter_array('in'),
  any: filter_array('any'),
  all: filter_array('all'),
  icontains: filter('icontains'),
  contains: filter('contains'),
  starts_with: filter('startswith'),
  istarts_with: filter('istartswith'),
  ends_with: filter('endswith'),
  iends_with: filter('iendswith'),
  year: filter('year'),
  month: filter('month'),
  day: filter('day'),
  week_day: filter('week_day'),
  regex: filter('regex'),
  range: filter_array('range'),
  gt: filter('gt'),
  lt: filter('lt'),
  gte: filter('gte'),
  lte: filter('lte'),
  is_null: filter_bool(1),
  is_not_null: filter_bool(0),
  eq: filter('eq')
}