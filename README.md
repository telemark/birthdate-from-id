[![Build Status](https://travis-ci.org/telemark/birthdate-from-id.svg?branch=master)](https://travis-ci.org/telemark/birthdate-from-id)
[![Coverage Status](https://coveralls.io/repos/telemark/birthdate-from-id/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/birthdate-from-id?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# birthdate-from-id

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/birthdate-from-id.svg)](https://greenkeeper.io/)
Extract date of birth from personal ID number (Norway)

## Usage
```javascript
'use strict'

const birthdateFromId = require('birthdate-from-id')
const pid = '18117109876'

console.log(birthdateFromId(pid)) //=> 1971-11-18
```

## License
[MIT](LICENSE)