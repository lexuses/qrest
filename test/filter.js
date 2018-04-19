'use strict';

var test = require('tape');
var qrest = require('../');

test('filter', function(t) {
  t.test('filter operators', function(st) {
    st.deepEqual(qrest.filter.equal('name', 'John'), {'filter{name}': 'John'});
    st.deepEqual(qrest.filter.equal('name', 'John', true), {'filter{-name}': 'John'});
    st.deepEqual(qrest.filter.starts_with('name', 'Jo'), {'filter{name.startswith}': 'Jo'});
    st.deepEqual(qrest.filter.range('price', [1, 100]), {'filter{price.range}': [1, 100]});
    st.deepEqual(qrest.filter.is_null('end'), {'filter{end.isnull}': 1});
    st.deepEqual(qrest.filter.is_not_null('end'), {'filter{end.isnull}': 0});
    st.end();
  });
  t.end();
});