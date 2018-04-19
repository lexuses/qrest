'use strict';

var test = require('tape');
var qrest = require('../');

test('sort', function(t) {
  t.test('sort list', function(st) {
    st.deepEqual(qrest.sort(['start_date', '-end_date']), { 'sort': ['start_date', '-end_date'] });
    st.deepEqual(qrest.sort('end_date'), { 'sort': ['end_date'] });
    st.end();
  });
  t.end();
});