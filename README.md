# swot-simple

[![build status](https://secure.travis-ci.org/mapbox/swot-simple.png)](http://travis-ci.org/mapbox/swot-simple)

Simple & fast JavaScript implementation of [Swot](https://github.com/leereilly/swot)

* only depends on tldjs
* compiles swot data into a single json file, so bootup is fast
* passes all of Swot's tests.
* fast

## Install

    npm install swot-simple

## How to use
The first thing you'll need to do after installation is generate the `swot-data.json` file. You'll need to `cd` into the `/node_modules/swot_simple` directory and run `./build.sh`. Once you've done this, you're ready to roll.

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

