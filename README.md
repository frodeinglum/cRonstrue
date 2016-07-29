# c**r**onstrue [![Build Status](https://travis-ci.org/bradyholt/cronstrue.svg?branch=master)](https://travis-ci.org/bradyholt/cronstrue) [![NPM Package](https://img.shields.io/npm/v/cronstrue.svg)](https://www.npmjs.com/package/cronstrue)

c**r**onstrue is a JavaScript library that parses a cron expression and outputs a human readable description of the cron schedule.  For example, given the expression "*/5 * * * *" it will output "Every 5 minutes".

This library was ported from the original C# implemenation called [cron-expression-descriptor](https://github.com/bradyholt/cron-expression-descriptor) and is also available in a [few other languages](https://github.com/bradyholt/cron-expression-descriptor#ports).

## Features
- Zero dependencies
- Supports all cron expression special characters including * / , - ? L W, #
- Supports 5, 6 (w/ seconds or year), or 7 (w/ seconds and year) part cron expressions
- i18n support with 14 languages

## Installation
c**r**onstrue is exported as an [UMD](https://github.com/umdjs/umd) module so it will work in an [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD), [CommonJS](http://wiki.commonjs.org/wiki/CommonJS) or browser global context.
### Node
```
npm install cronstrue
var cronstrue = require('cronstrue');
```
### Browser
 The `cronstrue.min.js` file from the `/dist` folder in the npm package should be served to the browser.  There are no dependencies so you can simply include the library in a `<script>` tag.
```
<script src="cronstrue.min.js" type="text/javascript"></script>
var cronstrue = window.cronstrue;
```
## Usage

```
cronstrue.toString("* * * * *");
> "Every minute"

cronstrue.toString("0 23 ? * MON-FRI");
> "At 11:00 PM, Monday through Friday"

cronstrue.toString("23 12 * * SUN#2");
> "At 12:23 PM, on the second Sunday of the month"
```

For more usage examples, including a demonstration of how cronstrue can handle some very complex cron expressions, you can [reference the unit tests](https://github.com/bradyholt/cronstrue/blob/master/test/cronstrue.js).

## i18n

The following locales are supported by passing in the locale name as an option to `cronstrue.toString()`.  For example, for the es (Spanish) locale, you would use: `cronstrue.toString("* * * * *", { locale: "es" });`.

- en - English
- nl - Dutch
- fr - French
- de - German
- it - Italian
- nb - Norwegian
- pl - Polish
- pt_BR - Portuguese (Brazil)
- ro - Romanian
- ru - Russian
- es - Spanish
- tr - Turkish
- uk - Ukrainian
- zh_CN - Chinese (Simplified)

## License

c**r**onstrue is freely distributable under the terms of the [MIT license](https://github.com/bradyholt/cronstrue/blob/master/LICENSE).
