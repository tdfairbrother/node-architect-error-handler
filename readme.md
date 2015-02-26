Node Architect Error Handler
====================

[![Build Status](https://travis-ci.org/tdfairbrother/node-architect-error-handler.svg)](https://travis-ci.org/tdfairbrother/node-architect-error-handler)

[![Coverage Status](https://coveralls.io/repos/tdfairbrother/node-architect-error-handler/badge.svg)](https://coveralls.io/r/tdfairbrother/node-architect-error-handler)


This module is exposed as an [Architect](https://github.com/c9/architect) plugin.

Include this module in your plugins list and include an api_key in the options to enable Airbrake.

Exports error_handler with a wrapped notify function. If the plugin is enabled the notify is a noop.


```sh
npm install
```

To run tests
```sh
npm test
```