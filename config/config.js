exports.config = {
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
 /*  multiCapabilities: [
    {
      browserName: 'chrome',
      shardTestFiles: true,
      maxInstances: 1
    },
    {
      browserName: 'firefox',
      shardTestFiles: true,
      maxInstances: 1
    }
  ],*/
  capabilities: {
    browserName: 'chrome'
  },
  specs: ['../tests/e2e/features/*.feature'],
  onPrepare: function () {
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().pageLoadTimeout(40000);
    browser.manage().timeouts().implicitlyWait(25000);
    browser.manage().window().maximize();
    require('babel-register');
  },
  onComplete: function () {
    const reporter = require('cucumber-html-reporter')
    const options = {
      theme: 'bootstrap',
      jsonFile: './cucumberreport.json',
      output: './reports/reports.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
      metadata: {
        'App Version': '0.3.2',
        'Test Environment': 'PRODUCTION',
        Browser: 'Chrome  77.0.2840.98',
        Platform: 'Windows 10 & MacOS',
        Parallel: 'Scenarios',
        Executed: 'Remote'
      }
    }
    reporter.generate(options);
  },
  cucumberOpts: {
    strict: true,
    require: [
      '../stepDefinitions/*.js',
      '../utilities/timeout.js'],
    tags: false,
    format: ['json:cucumberreport.json'],
    profile: false,
    'no-source': true
  }
}
