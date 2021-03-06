# team-manager

CLI for database management. Link to repo is [here](https://github.com/japankid-code/team-manager)

![Unlicense badge](https://img.shields.io/badge/license-Unlicense-blue?style=for-the-badge) ![language badge](https://img.shields.io/github/languages/top/japankid-code/team-manager?style=for-the-badge)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Installation

First of all, make sure you have [node](https://nodejs.org/en/) and [MySQL](https://dev.mysql.com/downloads/mysql/) installed. Enter the mysql shell through the terminal:

```bash
mysql -u root -p
```

create and seed the database and tables in the MySQL shell:

```SQL
source db/schema.sql
source db/seeds.sql
```

install node dependencies and run the app! But don't forget to update your credentials in `db/connection.js`

```bash
npm i
node index.js
```

## Usage

Uses MySQL and inquirer for an interactive database management experience.

![shot of app in the terminal](./team-manager.png)

## License

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>

[link to Unlicense](https://choosealicense.com/licenses/unlicense/)

## Contributing

thanks to [this guide](https://learnsql.com/blog/what-is-self-join-sql/) for help on self joins!!

## Tests

no testing procedures/coverage.

## Questions

email: japankid.jake@gmail.com

[Github profile](https://github.com/japankid-code).

If your project has a lot of features, consider adding a "Features" section.
