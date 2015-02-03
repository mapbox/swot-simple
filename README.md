# swot-simple

[![build status](https://secure.travis-ci.org/mapbox/swot-simple.png)](http://travis-ci.org/mapbox/swot-simple)

Simple & fast JavaScript implementation of [Swot](https://github.com/leereilly/swot)

* only depends on tldjs
* compiles swot data into a single json file, so bootup is fast
* passes all of Swot's tests.
* fast

## Install

    npm install swot-simple

### `isAcademic(email)`

Check an email for whether it is from an educational domain or not.


### Parameters

| parameter | type   | description          |
| --------- | ------ | -------------------- |
| `email`   | String | a full email address |


### Example

```js
swot.isAcademic('me@gmail.com'); // false
swot.isAcademic('lee@harvard.edu'); // true
```


**Returns** `boolean`, whether the email is educational


### `getInstitutionName(email)`

Check an email for whether it is from an educational domain or not,
and if it is a known educational institution, return its name.


### Parameters

| parameter | type   | description          |
| --------- | ------ | -------------------- |
| `email`   | String | a full email address |


### Example

```js
swot.getInstitutionName('lreilly@cs.strath.ac.uk');
// "University of Strathclyde"
```


**Returns** `boolean,String`, false, if the email is not educational. otherwise, a string describing the domain.

## Build Process

swot's main data is transformed by `build.js`. The list of tlds is transformed
from the [Ruby](https://github.com/leereilly/swot/blob/master/lib/swot/academic_tlds.rb) to
[json](tlds.json) by hand.
