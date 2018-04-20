## Qrest

It helps to format query string for django rest framework.

### Install
`npm i qrest --save`

### Usage with axios
```js
axios.get('/documents/', {
  params: {
    ...qrest.filter.contains('document_number', '123456'),
    ...qrest.filter.range('date', ['2018-04-01', '2018-04-30']),
    ...qrest.include(['manager', 'status']),
    ...qrest.sort(['issue_date', '-end_date']),
  }
})
```

or with completely data:
```js
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
qrest.query(input)
```

### Full list of filters
* in
* any
* all
* icontains
* contains
* starts_with
* istarts_with
* ends_with
* iends_with
* year
* month
* day
* week_day
* regex
* range
* gt
* lt
* gte
* lte
* is_null
* is_not_null
* eq
