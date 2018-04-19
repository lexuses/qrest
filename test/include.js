'use strict';

var test = require('tape');
var qrest = require('../');

test('include', function(t) {
  t.test('include models', function(st) {
    st.deepEqual(qrest.include(['article', 'group']), { 'include': ['article', 'group'] });
    st.deepEqual(qrest.include('manager'), { 'include': ['manager'] });
    st.end();
  });
  t.end();
});