[![Build Status](https://travis-ci.com/telemark/birthdate-from-id.svg?branch=master)](https://travis-ci.com/telemark/birthdate-from-id)
[![Coverage Status](https://coveralls.io/repos/telemark/birthdate-from-id/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/birthdate-from-id?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# birthdate-from-id

Extract date of birth from personal ID number (Norway).

It supports fødselsnummer, D-nummer and VGO-nummer

## Usage

```JavaScript
const birthdateFromId = require('birthdate-from-id')
const fid = '01010750160'
const did = '41085801188'
const vid = '41085899108'

console.log(birthdateFromId(fid)) //=> 2007-01-01
console.log(birthdateFromId(did)) //=> 1958-08-01
console.log(birthdateFromId(vid)) //=> 1958-08-01
```

## License

[MIT](LICENSE)

![Robohash image of birthdate-from-id](https://robots.kebabstudios.party/birthdate-from-id.png "Robohash image of birthdate-from-id")