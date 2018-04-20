'use strict';

var test = require('tape');
var qrest = require('../');

var input = {
  filter: [
    {name:'id', value: '1', type: qrest.filters.contains},
    {name:'issue_date', value: ['2018-01-01', '2018-03-30'], type: qrest.filters.range},
    {name:'price',  value: 0, type: qrest.filters.equal},
  ],
  include: [
    'manager', 'groups'
  ],
  sort: [
    'start_date'
  ]
}

var output = {
  'filter{id.contains}': '1',
  'filter{issue_date.range}': [ '2018-01-01', '2018-03-30' ],
  'filter{price}': 0,
  include: [ 'manager', 'groups' ],
  sort: [ 'start_date' ]
}
var broken_output = {
  'filter{issue_date.range}': [ '2018-01-01', '2018-03-30' ],
  'filter{price}': 0,
  include: [ 'manager', 'groups' ],
  sort: [ 'start_date' ]
}

test('query', function(t) {
  t.test('query data', function(st) {
    st.deepEqual(qrest.query(input), output);
    st.end();
  });
  t.test('broken query', function(st) {
    var broken_input = Object.assign({}, input);
    delete broken_input.filter[0].value;
    st.deepEqual(qrest.query(broken_input), broken_output);
    st.end();
  });
  t.end();
});
