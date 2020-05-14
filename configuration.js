var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Registration.js','Login.js'],
    directConnect:true,
    onPrepare: function () {
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots'
            })
        );

    },


    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    }
        // Spec patterns are relative to the configuration file location passed
        // to protractor (in this example conf.js).
        // They may include glob patterns.


        // Options to be passed to Jasmine-node.

    }
