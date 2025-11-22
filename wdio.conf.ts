import type { Options } from '@wdio/types';
import path from 'path';

export const config: Options.Testrunner = {
    runner: 'local',
    specs: [
        './tests/**/*.spec.ts'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), 'tests', 'ApiDemos.apk'),
        'appium:ensureWebviewsHavePages': true,
        'appium:nativeWebScreenshot': true,
        'appium:newCommandTimeout': 3600,
        'appium:connectHardwareKeyboard': true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    hostname: 'localhost',
    port: 4723,
    path: '/',
    services: [],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    
    // Hooks
    beforeSession: function (config, capabilities, specs) {
        console.log('Starting Appium session...');
    },
    
    before: function (capabilities, specs) {
        console.log('Test execution started');
    },
    
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (error) {
            console.log(`Test failed: ${test.title}`);
        }
    },
    
    after: function (result, capabilities, specs) {
        console.log('Test execution completed');
    }
};
