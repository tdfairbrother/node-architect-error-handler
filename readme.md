Node Architect Error Handler
====================

[![Build Status](https://semaphoreapp.com/api/v1/projects/eafc26d0-b678-437d-85e7-04a736258a83/359588/badge.png)](https://semaphoreapp.com/tdfairbrother/node-architect-error-handler)

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