'use strict';

var expect = require('expect.js');
var sinon = require('sinon');
var proxyquire = require('proxyquire').noPreserveCache();

var mock = sinon.mock;
var stub = sinon.stub;

var mockModules, errorHandler;


function setupPlugin(apiKey, done) {
    var plugin = proxyquire('../', mockModules);

    plugin({
            // Options
            api_key: apiKey
        }, {
            // Imports
            log: require('node-architect-log/mock')
        },
        // Register
        function(err, services) {
            if (err) throw err;

            // Access to exported services
            errorHandler = services.error_handler;
            done();
        });
}

describe('error_handler', function(){
    var createClient, handleExceptions, notify;

    beforeEach(function(){
        handleExceptions = stub();
        notify = stub();

        var airbrake = {
            handleExceptions:handleExceptions,
            notify:notify
        };

        createClient = stub().returns(airbrake);

        var airbrakeApi = {
            createClient:createClient
        };

        mockModules = {
            airbrake: airbrakeApi
        };
    });

    describe('when api key is not set', function() {

        beforeEach(function(done){
            setupPlugin(false, done);
        });

        it('does not call airbrake.createClient', function() {
            expect(createClient.callCount).to.eql(0)
        });

        describe('.notify', function() {
            it('calling error_handler.notify does not call airbrake.notify', function() {
                errorHandler.notify('test message');
                expect(notify.callCount).to.eql(0)
            });
        });
    });

    describe('when options api_key is set', function() {

        beforeEach(function(done){
            setupPlugin('api key', done);
        });

        it('calls airbrake.createClient with the api_key', function() {
            expect(createClient.calledWith('api key')).to.be(true);
        });

        describe('.notify', function() {
            it('calling error_handler.notify calls airbrake.notify with the message', function() {
                errorHandler.notify('test message');
                expect(notify.calledWith('test message')).to.be(true);
            });
        });
    });
});